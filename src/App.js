import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <Link to='/login'>Login</Link>
      </header>
    </div>
  );
}

const appComponent = withRouter(App)

export default appComponent;
