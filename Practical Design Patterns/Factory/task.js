var Repo = require('./taskRepository');

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.save = function() {
    console.log('saving task: ' + this.name);
    Repo.save(this);
};

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

module.exports = Task;
