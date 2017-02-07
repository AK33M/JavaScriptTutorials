// 'use strict';

var task = {
  title: 'My Title',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value: function () {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
  value: function () {
    return this.title + ' is urgent'; // this can be changed bcos' it is a new
                                      // Obj although inherited from task
  },
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(urgentTask.toString());
