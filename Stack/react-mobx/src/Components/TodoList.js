import React, {Component} from 'react';
import {observer} from 'mobx-react';

import TodoItem from './TodoItem';

@observer
class TodoList extends Component {
  onChangeCurrent = (index) => {
    const {current} = this.props;
    console.log(index)
    console.log(current)
    // current.index = index;
  }
  render () {
    const {store} = this.props;
    return(
      <div>
        {store.report}
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