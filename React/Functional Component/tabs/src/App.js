import React ,{useState} from 'react'
import "./App.css";
import MyComponent from './Components/MyComponent';
import  TapsDisplay  from './Components/TapsDisplay';
import  TapsShow from './Components/TabsShow';


function App() {
//  return (
//    <div className="App">
//      <header>
//        <MyComponent/>
//        </header>
//    </div>
//  )


const[data,setData]=useState("");
const newContent=(content)=>{
  setData(content);
}
return(
  <div className="App">
  <header>
    <TapsShow data={newContent}/>
    <TapsDisplay Content={data}/>

 </header>
  </div>
)
}

export default App;