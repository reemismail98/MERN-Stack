import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Reem" lastName="ismail" age="22" colorHair="black"/>
      <PersonCard firstName="Hani" lastName="Kiwan" age="22" colorHair="black"/>
      <PersonCard firstName="Tasnim" lastName="arafat" age="22" colorHair="black"/>
    </div>
  );
}

export default App;
