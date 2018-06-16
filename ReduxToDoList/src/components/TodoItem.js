import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { delTodo } from '../actions';

class TodoItem extends Component {
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <li>
        <span>{this.props.title}</span>
        <button onClick={this.handleClick.bind(this)}>Delete</button>
      </li>
    )
  }
}

export default TodoItem;
