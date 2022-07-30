import React from 'react';
import './App.css';
import Signup from './Components/Signup';
import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signup />
      </header>
    </div>
  );
}

export default withRouter(App);
