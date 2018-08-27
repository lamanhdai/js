import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends Component {
  
  render() {
    return (
      <div className="todo">
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}
