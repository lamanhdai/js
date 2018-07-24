import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './App.css';
import reducer from './reducers';
import {watcherSaga} from './actions';
import WeatherList from './containers/WeatherList';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(watcherSaga)

// render the application
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherList />
      </Provider>
    );
  }
}

export default App;
