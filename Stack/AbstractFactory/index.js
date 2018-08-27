function Employee(name) {
  this.name = name;

  this.say = function() {
    console.log('I am '+name);
  }
}

function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name);
  }
}

function run() {
  var persons = [];
  var enmployeeFact = new EmployeeFactory();

  persons.push(enmployeeFact.create('Dai'));

  persons.forEach(function(person) {
    person.say();
  })
}