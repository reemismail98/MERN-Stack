import React ,{useState} from 'react'
import Button from '@material-ui/core/Button';

export const TabsShow = (props) => {
            const taps=["Tap 1","Tap 2","Tap 3"];
            const clickhandler= (e,value)=> {
                    e.preventDefault();
                    props.data(value +" content is showing here");
                }
                return (
        <div>
           
        {        
            taps.map((value,i)=>{
            return <Button variant="contained" color="primary" key={i} onClick={e=>clickhandler(e,value)}>{value}
            </Button>   })  }  

        </div>
    )
}
export default TabsShow;