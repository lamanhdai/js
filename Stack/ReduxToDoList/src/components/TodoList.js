import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTodo} from '../actions'
import TodoItem from './TodoItem';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }
  handleClick(id) {
    this.props.handleDelete(id);
  }
  render() {
    let item = this.props.todos.map(data => {
      return(
        <TodoItem key={data.id} id={data.id} title={data.title}/>
      )
    })
    return (
      <ul className="todo_list">
        {item}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.all
  }
}

export default connect(mapStateToProps, {fetchTodo})(TodoList);
