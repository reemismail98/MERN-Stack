import React from 'react'

const ColorChange = (props) => {
    
    return (
        <div style={{color:props.color , background:props.background}}>
            <h3>{props.par}</h3>
        </div>
    )
}

export default ColorChange
