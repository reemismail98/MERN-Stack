import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router'
import {
    Paper,
    FormControl,
    label,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    button: {
        width: "10%",
        marginLeft:"1%",
    }
}

const Update = (props) => {
    const {id} = props;
    const[name,setName]=useState('');
    const[position,setPosition]=useState('');

    const [errors, setErrors] = useState([]); 


useEffect(()=>{
    axios.get('http://localhost:8000/api/managers/'+ id)
    .then(res=>{
        console.log(res)
        setName(res.data.manager.name);
        setPosition(res.data.manager.position);

    })
},[])

const updateManager = (e) => {
    e.preventDefault()
    axios.put('http://localhost:8000/api/managers/'+ id, {
      name,
      position
    })
    .then((res) => console.log(res) & navigate("/managers"))
    .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        }) }

const home = () => {
navigate("/managers")
}

    return (
        <div>


                <h2>Edit Player:</h2>
            {/* <Button type="submit" variant="contained" color="primary" onClick={e=>home()}>
                Home
                </Button>       */}
                  <form onSubmit={updateManager}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <FormControl variant="outlined">
                    <label>Name : </label>
                    <OutlinedInput type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                <FormControl variant="outlined">
                    <label>Position : </label>
                    <OutlinedInput type="text" value={position} onChange={(e) => setPosition(e.target.value)}/>
                </FormControl>
                <br/><br/>
                <Button style={styles.button} type="submit" variant="contained" color="primary" onClick={e=>home()}>
                Cancel
                </Button>
                <Button style={styles.button} type="submit" variant="contained" color="primary">
                Submit
                </Button>
            </form>
        </div>
    )
}

export default Update