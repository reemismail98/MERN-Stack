import React from 'react';
import Main from './views/Main';
import { Router } from '@reach/router';
import Update from './views/Update';
import ManagerForm from './views/ManagerForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <header >
      <Router>
        <Main path="/managers"/>
        <ManagerForm path="/managers/new"/>
        <Update path="managers/:id/edit"/>
      </Router>
      </header>
    </div>
  );
}

export default App;
