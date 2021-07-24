const Todo=(props) =>{
    const todoClasses = ["blod","italic"];
    if(props.todo.complete){
        todoClasses.push("line-throught")
    }


    return (
    <div>
    <input onChange={(event) => {
      props.handleToggleComplete(props.i);
    }} checked={props.todo.complete} type="checkbox" />
    <span>{props.todo.text}</span>
    <button onClick={(event)=>{
      props.handelToDoDelete(props.i);
    }} 
    > Delete</button>
    </div>
    )
}
export default Todo;
