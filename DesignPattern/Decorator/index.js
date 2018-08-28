var User = function(name) {
  this.name = name;

  this.say = function() {
    log.add('User: '+this.name)
  }
}

var DecoratedUser = function(user, street) {
  this.user = user;
  this.name = user.name;
  this.street = street;

  this.say = function() {
    log.add('Decorated User: '+this.name+', '+this.street);
  }
}

var log = (function() {
  var log = '';

  return {
    add: function(msg) { log+=msg+'\n'; },
    show: function() { console.log(log); }
  }
})();

function run() {
  var user = new User('Dai');
  user.say();

  var decorated = new DecoratedUser(user, 'Phu To Hoa');
  decorated.say();

  log.show();
}