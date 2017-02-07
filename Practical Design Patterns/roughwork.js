var obj = {};
var val = 'value';
obj[val] = 'new value';
console.log(obj['value']);

var nextObj = Object.create(Object.prototype);
var lastObj = new Object();
