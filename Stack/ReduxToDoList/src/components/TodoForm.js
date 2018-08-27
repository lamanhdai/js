import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addTodo } from '../actions';

class TodoForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    if (!title) {
      return;
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Title</label><input type="text" ref="title" />
        <button>Add</button>
      </form>
    )
  }
}

export default connect()(TodoForm);
