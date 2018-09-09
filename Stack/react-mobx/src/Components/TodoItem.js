import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class TodoItem extends Component {
  render() {
    const {todo} = this.props;
    return(
      <li>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={this.onToggleCompleted}/>
        {todo.task}
        {todo.assignee}
      </li>
    )
  }
  onToggleCompleted = () => {
    const {onChangeCurrent, todo} = this.props;
    todo.completed = !todo.completed;
    onChangeCurrent(todo.id);
  }
}

export default TodoItem;