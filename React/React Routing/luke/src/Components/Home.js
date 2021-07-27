import React,{useState} from 'react'
import { navigate } from '@reach/router'

const Home = (props) => {
    const[wars,setWars]=useState("people");
    const [no,setNo]= useState(null);
    const handleClick=(e)=>{
        e.preventDefault();
        navigate('/' + wars +'/' + no)
    }
    return (
        <div>
   <form>
       <label>Srearch for: </label>
      <select value={wars} onChange={(e)=> setWars(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>        
      </select >
            <label> ID: </label>
                <input type="number" value={no} onChange={(e)=>setNo(e.target.value)}/>
            
            <button onClick={handleClick}> Search</button>
        </form>
        </div>
    )
        }

export default Home
