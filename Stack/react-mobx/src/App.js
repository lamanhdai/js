import React, { Component } from 'react';

import ObservableTodoStore from './Components/TodoStore';
import './App.css';

export default class App extends Component {
  renderTodo() {
    ObservableTodoStore.addTodo('read Mobx concept');
    ObservableTodoStore.addTodo('try Mobx');
    ObservableTodoStore.todos[0].completed = true;
    ObservableTodoStore.todos[0].task = 'challenge Mobx';
  }
  render() {
    return (
      <div className="App">
        {
          this.renderTodo()
        }
      </div>
    );
  }
}
