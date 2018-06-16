import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Todo from './components/Todo';
import reducer from './reducers';

import './App.css';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Todo />
        </div>
      </Provider>
    );
  }
}

export default App;
