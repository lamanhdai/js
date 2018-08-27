function Factory() {
  this.createEmployee = function(type) {
    var employee;

    if(type==='officer') {
      employee = new Officer();
    } else if(type==='lead') {
      employee = new Lead();
    } else if(type==='director') {
      employee = new Director();
    }

    employee.type = type;

    employee.say = function() {
      log.add(this.type + ': '+ this.hour);
    }

    return employee;
  }
}

var Officer = fuction() {
  this.hour = 10;
}

var Lead = fuction() {
  this.hour = 15;
}

var Director = fuction() {
  this.hour = 20;
}

var log = (function(){
  var log = '';
  return {
    add: function(msg) {
      log+=msg+'\n';
    },
    show: function() {
      console.log(log);
    }
  }
});

function run() {
  var employees = [];
  var factory = new Factory();

  employees.push(factory.createEmployee('officer'));
  employees.push(factory.createEmployee('lead'));
  employees.push(factory.createEmployee('director'));

  for(var i=0;i<employees.length;i++) {
    employees[i].say();
  }

  log.show();
}