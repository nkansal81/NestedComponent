import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Comment from "./Comment/comment";

const getNewComment = (commentValue, isRootNode = false, parentNodeId) => {
  return {
    id: uuidv4(),
    commentText: commentValue,
    childCommments: [],
    isRootNode,
    parentNodeId,
  };
};

const initialState = {};

function App() {
  const [comments, setComments] = useState(initialState);
  const [rootComment, setRootComment] = useState("");
  const addComment = (parentId, newCommentText) => {
    let newComment = null;
    if (parentId) {
      newComment = getNewComment(newCommentText, false, parentId);
      setComments((comments) => ({
        ...comments,
        [parentId]: {
          ...comments[parentId],
          childCommments: [...comments[parentId].childCommments, newComment.id],
        },
      }));
    } else {
      newComment = getNewComment(newCommentText, true, null);
    }
    setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
  };
  const commentMapper = (comment) => {
    return {
      ...comment,
      childCommments: comment.childCommments
        .map((id) => comments[id])
        .map((comment) => commentMapper(comment)),
    };
  };
  const enhancedComments = Object.values(comments)
    .filter((comment) => {
      return !comment.parentNodeId;
    })
    .map(commentMapper);
  const onAdd = () => {
    addComment(null, rootComment);
    setRootComment("");
  };
  return (
    <div className="App">
      <header style={{marginBottom : '2rem', fontSize : '2rem'}}>Nested Comment</header>
      <div className="comments-container">
        <input
          type="text"
          value={rootComment}
          onChange={(e) => setRootComment(e.target.value)}
          placeholder="add comment"
          style={{ width: "80%", marginRight: "1rem" }}
        />{" "}
        <button onClick={onAdd}>Submit</button>
      </div>
      <div
        style={{
          border: "1px solid green",
          width: "60%",
          margin: "auto",
          overflowX: "auto",
          padding: "2rem",
        }}
      >
        {enhancedComments.map((comment, key) => {
          return (
            <Comment key={key} comment={comment} addComment={addComment} />
          );
        })}
      </div>
    </div>
  );
}


export default App;
