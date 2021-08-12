import React, {useState } from "react";

const ToDo = ({ toDo, handletoggle,handleEditClick,handleDelete}) => {
  
  return (
    <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom:"20px",
            width:"40vw",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ marginRight: "50px",marginBottom:"20px" }}
            className={toDo.complete ? "todo strike" : "todo"}
            onClick={() => {
              handletoggle(toDo.id);
            }}
            id={toDo.id}
            value={toDo.id}
          >
            {toDo.task}
          </div>
            <button style={{ marginRight: "15px" }} onClick={() => {handleEditClick(toDo)}}>Edit the item</button>
            <button style={{ marginRight: "15px" }} onClick={() => {handleDelete(toDo.id)}}>Delete the item</button>
        </div>
    </div>
  );
};

export default ToDo;
