import { useState,useEffect } from "react";
import "./App.css";
import data from "./data.json";
import ToDoList from "./ToDoList";
import ToDoInputForm from "./ToDoInputForm";
import EditForm from "./EditForm";

function App() {
  // const [toDoList, settoDoList] = useState(data);

  const [toDoList, settoDoList] = useState(() => {
    const savedTodos = localStorage.getItem("toDoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  // const [toDoList, settoDoList] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo,setCurrentToDo] = useState({});

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);
  
  const handletoggle = (id) => {
    let mapped = toDoList.map((toDo) => {
      return toDo.id === id
        ? { ...toDo, complete: !toDo.complete }
        : { ...toDo };
    });
    settoDoList(mapped);
  };
  const handleDelete = (id) => {
    let filteredSet = toDoList.filter((toDo) => {
      return ( toDo.id !== id );
    });
    settoDoList(filteredSet);
  };
  const addListItem = (userInput) => {
    let newList = [...toDoList];
    if(userInput !== ''){
      newList = [
        ...toDoList,
        { id: toDoList.length + 1, task: userInput, complete: false },
      ];
    }
    settoDoList(newList);
  };
  const handleEditClick = (currentTodo) => {
    setIsEditing(true);
    setCurrentToDo({...currentTodo});
  }
  const handleEditInputChange = (e) => {
    setCurrentToDo({...currentTodo,task:e.target.value});
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateClick(currentTodo.id,currentTodo);
  }
  const handleUpdateClick = (id,currentTodo) => {
    console.log(currentTodo,'currentToDo');
    let list = toDoList.map((toDo) => {
       return(
         toDo.id === id ? currentTodo : toDo
       );
    });
    settoDoList(list);
    setIsEditing(false);
  }
  return (
    <div className="App">
      <div className="App-Form">
        {isEditing? (
          <EditForm 
          toDo = {currentTodo}
          setIsEditing={setIsEditing}
          handleEditInputChange = {handleEditInputChange}
          handleFormSubmit={handleFormSubmit}
          />
         ) : (
          <ToDoInputForm
          handleAddItem={addListItem}
        />
          
        )}
      </div>
      <div>
        <h1>To do List</h1>
        <ul style={{ display: "inline-block" }}>
          <ToDoList
            toDoList={toDoList}
            handletoggle={handletoggle}
            handleEditClick={handleEditClick}
            handleDelete={handleDelete}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
