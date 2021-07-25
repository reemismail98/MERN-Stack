import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'
import Pokemon from './Components/Pokemon';

function App() {
  const [pokemon,setPokemon]= useState([]);
  return (
    <div className="App">
      <header className="App-header">
       <Pokemon />
      </header>
    </div>
  );
}

export default App;
