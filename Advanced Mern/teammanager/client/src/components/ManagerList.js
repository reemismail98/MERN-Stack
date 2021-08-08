import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Header from './Header';
import {
    FormControl,
    label,
    OutlinedInput,
    Button
} from '@material-ui/core';

const ManagerList = (props) => {
    const { removeFromDom} = props;
    const [manag, setManager] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/managers/" + props.id)
            .then(res => {
                setManager(res.data)
            console.log(res.data)
    })},[])
    const deleteManager = (managerId) => {
        axios.delete('http://localhost:8000/api/managers/' + managerId)
            .then(res => {
                removeFromDom(managerId);
            })
    }
   return (
        <div>
          <Header/>
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            {props.manager.map((manager, idx)=>{
                return <tr key={idx}><Link to={manager._id}><td>{manager.name}</td></Link> 
                <td>{manager.position}</td>
                <td>
            <Button type="submit" variant="contained" color="primary" onClick={(e)=>{deleteManager(manager._id)}}>
                Delete
                </Button>
                <Link to={manager._id + "/edit"}>
            <Button type="submit" variant="contained" color="primary" >
                Edit
                </Button>
            </Link></td>
            </tr>
            })}
            </table>
        </div>
    )
}
export default ManagerList


// import React, {useState} from 'react'
// import axios from 'axios';
// import { Link, navigate } from '@reach/router';

// const PlayerForm = () => {
//     const [name, setName]=useState("");
//     const [position, setPosition]=useState("");
//     const [errors, setErrors]=useState([]);


//     const onSubmitHandler = e => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.post('http://localhost:8000/api/managers', {
//             name,
//             position,
//         })
//         .then(res=>navigate("/managers/list"))
//         .catch(err=>{
        
//             const errorResponse = err.response.data.errors; 
//             const errorArr = []; 
//             for (const key of Object.keys(errorResponse)) { 
//                 errorArr.push(errorResponse[key].message)
//             }
//             setErrors(errorArr);
//         })  
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmitHandler}>
//         {errors? errors.map((eachError)=>{
//             return(<p>{eachError}</p>) 
//         })
//         :""
//         }
//                 <label>Player Name</label>
//                 <input type="text"  onChange={(e)=>setName(e.target.value)} value={name}/><br/>
//                 <label>Prefered Position</label>
//                 <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/><br/>
//                 <input type="submit" value="Add" />
//             </form>
//         </div>
//     )
// }

// export default PlayerForm