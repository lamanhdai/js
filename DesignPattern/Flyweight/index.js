function Flyweight(make, model, processor) {
  this.make = make;
  this.model = model;
  this.processor = processor;
}

var FlyweightFactory = (function(){
  var flyweights = {};

  return {
    get: function(make, model, processor) {
      if(!flyweights[make+model]) {
        flyweights[make+model] = new Flyweight(make, model, processor);
      }
      return flyweights[make+model];
    },

    getCount: function() {
      var count = 0;
      for(var f in flyweights) count++;
      return count;
    }
  }
})();

function ComputerCollection() {
  var computers = {};
  var count = 0;

  return {
    add: function(make, model, processor, memory, tag) {
      computers[tag] = new Computer(make, model, processor, memory, tag);
      count++;
    },

    get: function(tag) {
      return computers[tag];
    },

    getCount: function() {
      return count;
    }
  }
}

var Computer = function(make, model, processor, memory, tag) {
  this.flyweight = FlyweightFactory.get(make, model, processor);
  this.memory = memory;
  this.tag = tag;
  this.getMake = function() {
    return this.flyweight.make;
  }
}

var log = (function(){
  var log = '';

  return {
    add: function(msg) {log+=msg+'\n';},
    show: function() {console.log(log);}
  }
})();

function run() {
  var computers = new ComputerCollection();

  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'aaaaa');
  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'aaaaa');
  computers.add('Asus', 'Pana', 'Intel', '3G', 'aaaaa');
  computers.add('Asus', 'Pana', 'Intel', '5G', 'aaaaa');
  computers.add('Asus', 'Pana', 'Intel', '5G', 'ccccc');

  log.add('Computers: '+computers.getCount());
  log.add('Flyweights: '+FlyweightFactory.getCount());
  log.show();
}