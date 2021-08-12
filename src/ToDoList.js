import React, { Component } from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handletoggle,handleDelete,handleEditClick}) => {
  return (
    <div>
        {toDoList.map((toDo) => {
          return (
            <ToDo
              toDo={toDo}
              handletoggle={handletoggle}
              key={toDo.id + toDo.task}
              handleEditClick={handleEditClick}
              handleDelete = {handleDelete}
            />
          );
        })}
    </div>
  );
};

export default ToDoList;
