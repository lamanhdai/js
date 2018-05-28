import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  </Provider>
  , document.querySelector('.container'));
