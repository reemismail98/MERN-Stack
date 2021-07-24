import React ,{useState} from 'react'
import Button from '@material-ui/core/Button';

const MyComponent =() => {
const taps=["Tap 1","Tap 2","Tap 3"];
const [msg,setMsg]=useState("");


//value can change name
const clickhandler= (e,value)=> {
    e.preventDefault();
    setMsg(value+" content is showing here")
}
return (
<div>
{
    taps.map((value,i)=>{
        return <Button variant="contained" color="primary" key={i} onClick={e=>clickhandler(e,value)}>{value}
      </Button>
    })
}
<p>{msg}</p>
 </div>
)
}

export default MyComponent