function GeoCoder() {
  this.getLatLng = function(addr) {
    if(addr === 'Amsterdam') {
      return '52˚ N, 4˚ E';
    } else if(addr === 'London') {
      return '53˚ N, 5˚ E';
    } else if(addr === 'Paris') {
      return '54˚ N, 6˚ E';
    } else if(addr === 'Berlin') {
      return '55˚ N, 7˚ E';
    } else {
      return '';
    }
  };
}

function GeoProxy() {
  var geocoder = new GeoCoder();
  var geocache = {};

  return {
    getLatLng: function(addr) {
      if(!geocache[addr]) {
        geocache[addr] = geocoder.getLatLng(addr);
      }
      log.add(addr+': '+geocache[addr]);
      return geocache[addr];
    },
    getCount: function() {
      var count = 0;
      for(var code in geocache) {count++;}
      return count;
    }
  };
}

var log = (function(){
  var log = '';
  return {
    add: function(msg) {log+=msg+'\n';},
    show: function() {console.log(log);}
  }
})();

function run() {
  var geo = new GeoProxy();

  geo.getLatLng('Paris');
  geo.getLatLng('London');
  geo.getLatLng('Amsterdam');
  geo.getLatLng('London');
  geo.getLatLng('Hochiminh');

  log.add('\nCache size: '+geo.getCount());
  log.show();
}