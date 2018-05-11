// import variable from './variable';
// variable();

// import param from './param';
// param();

import { Task } from './oop';
let task = new Task({id: 1, name: 'dai', state: 100});
task.showTaskInfo();

task.point = 1;
console.log(task.point);