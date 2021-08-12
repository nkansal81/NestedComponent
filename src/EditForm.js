import React from "react";

const EditForm = ({toDo,setIsEditing,handleEditInputChange,handleFormSubmit}) => {
  
  return (
    <div>
        <form style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <input
            type="text"
            id={toDo.id}
            value={toDo.task}
            className={toDo}
            onChange={handleEditInputChange}
          ></input>
          <div>
            <button style={{ margin: "15px" }} onClick={handleFormSubmit}>Update</button>
            <button style={{ margin: "15px" }} onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
    </div>
  );
};

export default EditForm;
