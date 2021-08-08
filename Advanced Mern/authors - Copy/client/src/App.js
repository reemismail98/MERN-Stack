import React from 'react';
import Main from './views/Main';
import { Router } from '@reach/router';
import Update from './views/Update';
import AuthorForm from './views/AuthorForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <header >
      <Router>
        <Main path="/authors"/>
        <AuthorForm path="/authors/new"/>
        <Update path="authors/:id/edit"/>
      </Router>
      </header>
    </div>
  );
}

export default App;