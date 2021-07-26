import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home'
import Par from './Components/Par'
import ColorChange from './Components/ColorChange'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Home path="/home"/>
        <Par path="/:par"/>
        <Par path="/:par"/>
        <ColorChange path="/:par/:color/:background"/>
        </Router>
      </header>
    </div>
  );
}

export default App;
