import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
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
    })})
    const deleteManager = (managerId) => {
        axios.delete('http://localhost:8000/api/managers/' + managerId)
            .then(res => {
                removeFromDom(managerId);
            })
    }
   return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to="new">Add an Author </Link> 
            <p>We have quotes by:</p>


            {props.manager.map((manager, idx)=>{
                return <p key={idx}><Link to={manager._id}>{manager.name} </Link> 
                
            <button type="submit" variant="contained" color="primary" onClick={(e)=>{deleteManager(manager._id)}}>
                Delete
                </button>
            <Link to={manager._id + "/edit"}>
            <button type="submit" variant="contained" color="primary" >
                Edit
                </button>
            </Link>
            </p>
            })}
        </div>
    )
}
export default ManagerList