import React, {Component} from 'react';
import {observer} from 'mobx-react';

import TodoItem from './TodoItem';

@observer
class TodoList extends Component {
  onChangeCurrent = (index) => {
    const {store} = this.props;
    store.current = index;
  }
  render () {
    const {store} = this.props;
    return(
      <div>
        <div>{store.track}</div>
        <div>{store.report}</div>
        <ul style={{listStyleType: 'none'}}>
          {
            store.todos.map(
              (todo, idx) => <TodoItem key={idx} todo={todo} onChangeCurrent={this.onChangeCurrent} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;