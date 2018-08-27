function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function() {
    var customer = new Customer();

    customer.firstName = proto.firstName;
    customer.lastName = proto.lastName;

    return customer;
  };
}

function Customer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.say = function() {
    console.log(this.firstName, this.lastName);
  };
}

function run() {
  var proto = new Customer('Lam', 'Dai');
  var prototype = new CustomerPrototype(proto);

  var customer = prototype.clone();
  customer.say();
}