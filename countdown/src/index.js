import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { history } from './history';
import Reducer from './Reducers/Reducer';
import Login from './Components/Login';
import Landing from './Components/Landing';
import AddEvent from './Components/AddEvent';

const store = createStore(Reducer);

ReactDOM.render(
  
  <React.StrictMode>
      <BrowserRouter history={history}>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/addevent' component={AddEvent} />
          </Switch> 
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
