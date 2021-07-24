import './App.css';
import React,{useState} from 'react';
import Todo from "./Components/Todo";

function App() {
  const [newTodo,setNewTodo]=useState("");
  const [todos,setTodos]=useState([]);

  const handelNewToDoSubmit=(event) => {
    event.preventDefult();
    if(newTodo.length === 0)
    return;

    const todoItem={
      text:newTodo,
      complete:false
    }
    setTodos([...todos,todoItem]);
    setNewTodo("");
  };
  const handelToDoDelete= (delIdx) => {
    const filteredTodos=todos.filter((todo,i) => {
    return i !== delIdx;
    });
    setTodos(filteredTodos);
  };
  const handleToggleComplete = (idx) => {
  const updateTodos=todos.map((todo,i)=>{
    if(idx === i){
      todo.complete = ! todo.complete;
    }
    return todo;
  });
  setTodos(updateTodos);
}
return (
    <div style={{textAlign:"center"}}>
      <form 
      onSubmit={(event) =>{
      handelNewToDoSubmit(event);
      }}>
        <input 
        onChange={(event) =>{
          setNewTodo(event.target.value);
        }}
        type="text"
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr/>
      {todos.map((todo,i) =>{
        return(
          <Todo key={i} i={i} todo={todo} handleToggleComplete={handleToggleComplete}  handelToDoDelete={handelToDoDelete}/>
        );
      })}
    </div>
  );
}

export default App;
