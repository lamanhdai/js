// import variable from './variable';
// variable();

// import param from './param';
// param();

// import { Task } from './oop';
// let task = new Task({id: 1, name: 'dai', state: 100});
// task.showTaskInfo();

// task.point = 1;
// console.log(task.point);

import { show, GenericNumber } from './generic';
show();
let myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = 'b';
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add('a','b'))