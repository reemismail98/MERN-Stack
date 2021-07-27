import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import People from './Components/People'
import { Router } from '@reach/router';
import React,{useState} from 'react'


function App() {
  const [showData, setShowData] = useState('');
  const handleClick = (select, id) => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <Home click={handleClick}/>
        <Router>
        <People path="/:wars/:id" data={showData}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
