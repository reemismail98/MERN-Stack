import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import {
    Paper,
    FormControl,
    label,
    OutlinedInput,
    Button
} from '@material-ui/core';

const AuthorList = (props) => {
    const { removeFromDom } = props;
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => setAuthor(res.data))
    })
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId);
            })
    }
    console.log(author)
    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to="new">Add an Author </Link> 
            <p>We have quotes by:</p>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                    <td></td>
            {props.auth.map((author, idx)=>{
                return <tr key={idx}><Link to={author._id}><td>{author.name}</td> </Link> 
                <td>
            <Button type="submit" variant="contained" color="primary" onClick={(e)=>{deleteAuthor(author._id)}}>
                Delete
                </Button>
            <Link to={author._id + "/edit"}>
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
export default AuthorList



