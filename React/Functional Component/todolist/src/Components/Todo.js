import React ,{useState} from 'react'

export const Todo = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const add=(e)=> {
    e.preventDefault();
    setList([...list, {text: inputValue,completed: false}]);
    setInputValue('');
  }

  const remove=(index)=> {
    setList(list.filter((item, i) => i !== index));
  }

  const inp=(index)=> {
    const obj = {...list[index]};
    obj.completed  =! obj.completed;
    setList([...list.slice(0, index),obj].concat(list.slice(index + 1)));
  }
    return (
    <div>
      <form onSubmit={add}>
        <input onChange={e => setInputValue(e.target.value)} value={inputValue} />
        <button>Add</button>
      </form>
      {list.map((item, i) => (
        <div key={i}>
          <span>{item.text}</span>
          <input
            type="checkbox"
            checked={item.completed}
            onClick={() => inp(i)}
            readOnly
          />
          <button onClick={() => remove(i)}>Delete</button>
    </div>
      ))}

      
    </div>
    )
}
export default Todo;