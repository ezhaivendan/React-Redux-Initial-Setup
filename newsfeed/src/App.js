import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import Tags from './Components/Tags';

const mapStatetoProps = (state) => ({ news : state});

function App(props) {
  const redirectMe = () => {  props.history.push('/login')}


  return (
    <div className="App">
      <header className="App-header">
       <Tags /> 
      </header>
    </div>
  );
}

const appComponent = withRouter(App)

export default connect(mapStatetoProps)(appComponent);
