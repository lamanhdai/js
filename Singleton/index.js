var Singleton = (function() {
  var instance;

  function createInstance() {
    var object = new Obeject('I am instance');
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
        return instance;
      }
    }
  }
})();

function run() {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  console.log('instace1', instance1);
  console.log('instace2', instance2);
}