import react, { useState } from 'react';
    
    
export const ColorDisplay = (props) => {
    return (
        <div className="box" style={{
            display:'flex',
            justifyContent:'center'
        }}>
            { props.color.map(item=>(<div class="colorbox" style={{
    backgroundColor:item,
    width:'100px',
    height:'200px',
}}> {item}
        </div>)) }
</div>
    );
};
    
export default ColorDisplay;
