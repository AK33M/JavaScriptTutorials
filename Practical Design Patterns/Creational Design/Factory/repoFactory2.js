var repoFactory = function() {

  var repos = this;
  var repoList = [
    { name: 'task', source : './taskRepository'},
    { name: 'user', source : './userRepository'},
    { name: 'project', source : './projectRepository'},
  ];

  repoList.forEach(function(repo){
    repos[repo.name] = require(repo.source)
  });
    // this.getRepo = function(repoType) {
    //     if (repoType === 'task') {
    //         var taskRepo = require('./taskRepository');
    //         return taskRepo;
    //     }
    //     if (repoType === 'user') {
    //         var userRepo = require('./userRepository');
    //         return userRepo;
    //     }
    //     if (repoType === 'project') {
    //         var projectRepo = require('./projectRepository');
    //         return projectRepo;
    //     }
    // }
};

module.exports = new repoFactory;
