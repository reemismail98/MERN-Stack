import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
        <PersonCard firstName="reem" lastName="ismail" age={ 22 } hairColor="red" /> 
      </header>
    </div>
  );
}

export default App;
