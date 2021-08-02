import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import { Router } from '@reach/router';
import Update from './views/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Main path="product/"/>
        <Detail path="product/:id"/>
        <Update path="product/:id/edit"/>
      </Router>
      </header>
    </div>
  );
}

export default App;

