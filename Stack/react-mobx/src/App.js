import React, { Component } from 'react';

import TodoList from './Components/TodoList';
import ObservableTodoStore from './Components/ObservableTodoStore';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList store={new ObservableTodoStore()} />
      </div>
    );
  }
}
