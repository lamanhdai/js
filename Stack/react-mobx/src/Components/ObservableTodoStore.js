import {observable, computed, autorun} from 'mobx';

class ObservableTodoStore {
  @observable todos = [
    {
      id: 0,
      task: 'read Mobx concept',
      completed: false,
      assignee: null
    },
    {
      id: 1,
      task: 'try Mobx',
      completed: false,
      assignee: null
    }
  ];

  @observable current = 0;

  constructor() {
    autorun(() => {
      console.log(this.report);
      console.log('\n');
      console.log(this.track);
    });
  }

  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  @computed get report() {
    if (!this.todos.length)
      return '<none>';
    return `Next todo: "${this.todos[0].task}". Progress: ${this.completedTodosCount}/${this.todos.length}`
  }

  @computed get track() {
    return `Changed todo: "${this.current}"`
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}

export default ObservableTodoStore;