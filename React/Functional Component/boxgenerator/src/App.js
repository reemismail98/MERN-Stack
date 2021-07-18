import logo from './logo.svg';
import './App.css';
import ColorForm from './Components/ColorForm'
import ColorDisplay from './Components/ColorDisplay'
import react, { useState } from 'react';

function App() {
  const colors=[]
  const [currentColor, setCurrentColor]=useState(colors);
  const addNewColor = ( newColor ) => {
    setCurrentColor( currentColor.concat(newColor) );
  }
  
  return (
      <>
          <ColorForm onNewColor={ addNewColor } />
          <ColorDisplay color={ currentColor } />
      </>
  );
}

export default App;
