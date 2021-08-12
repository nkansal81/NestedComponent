import React, { useState } from "react";

const ToDoInputForm = ({ handleAddItem}) => {
  const [userInput, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(userInput);
    setInput("");
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                value={userInput}
                type="text"
                placeholder="enter item"
                className="edit"
                style={{backgroundColor:"lightyellow"}}
            ></input>
            <button>Add Item</button>
        </form>
        
        
    </div>
  );
};

export default ToDoInputForm;
