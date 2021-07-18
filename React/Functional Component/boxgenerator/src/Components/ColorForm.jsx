import React from 'react'
import react, { useState } from 'react';

const ColorForm = (props) => {
    const [newColor, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
         props.onNewColor( newColor );
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Color</h1>
            <input onChange={ (e) => setColor(e.target.value) } value={ newColor } />
            <input type="submit" value="Add" />
        </form>
    );
};
      
export default ColorForm;