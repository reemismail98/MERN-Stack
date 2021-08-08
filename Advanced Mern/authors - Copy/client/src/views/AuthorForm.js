
import React, { useState } from 'react'
import axios from 'axios'
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

const AuthorForm = (props) => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/new', {
            name
            })
            .then((res) => console.log(res) & navigate("/authors"))
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
        navigate("/authors")
    }

    return (
        <> 
            <h2>Favorite Authors:</h2>
            <Button type="submit" variant="contained" color="primary" onClick={e => {home()}}>
                Home
                </Button>      
              <p>Add a new Author</p>

                <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <FormControl variant="outlined">
                    <label>Name: </label>
                    <OutlinedInput type="text" onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                <br/><br/>
                <Button style={styles.button} type="submit" variant="contained" color="primary" onClick={e => {home()}}>
                Cancel
                </Button>
                <Button style={styles.button} type="submit" variant="contained" color="primary" >
                Submit
                </Button>
            </form>

        </>
    )
}

export default AuthorForm
