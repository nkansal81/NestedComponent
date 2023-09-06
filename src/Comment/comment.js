import { useState } from "react";

function Comment({ comment, addComment }) {
    const { commentText, childCommments, id } = comment;
    const [childComment, setChildComment] = useState("");
    const [show, setShow] = useState(true);
    const [showAddComponet, setShowAddComponet] = useState(false);
    const onAdd = () => {
      addComment(id, childComment);
      setChildComment("");
      setShowAddComponet(false);
    };
    return (
      <div className="Comment">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "left" }}>{commentText}</div>
          &nbsp;
          {childCommments.length > 0 && (
            <button onClick={() => setShow((show) => !show)}>
              {show ? "Hide" : "Show"}
            </button>
          )}
        </div>
        <div>
          <div>
            {showAddComponet ? (
              <>
                <input
                  type="text"
                  value={childComment}
                  onChange={(e) => setChildComment(e.target.value)}
                  placeholder="add comment"
                />{" "}
                <button onClick={onAdd}>Submit</button>
              </>
            ) : (
              <button
                style={{ cursor: "pointer", fontSize: "0.7rem", color: "black" }}
                onClick={() => setShowAddComponet(true)}
              >
                Reply
              </button>
            )}
          </div>
        </div>
        {show &&
          childCommments.map((childCommentEl, key) => {
            return (
              <Comment
                key={key}
                comment={childCommentEl}
                addComment={addComment}
              />
            );
          })}
      </div>
    );
  };
  export default Comment;
  