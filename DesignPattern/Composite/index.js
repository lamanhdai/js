var Node = function(name) {
  this.children = [];
  this.name = name;
}

Node.prototype = {
  add: function(child) {
    this.children.push(child);
  },

  remove: function(child) {
    var length = this.children.length;
    for(var i=0;i<length;i++) {
      if(this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  },

  getChild: function(i) {
    return this.children[i];
  }
}

function traverse(indent, node) {
  log.add(Array(indent++).join('--')+node.name);

  for(var i=0, len=node.children.length;i<len;i++) {
    traverse(indent, node.getChild(i))
  }
}

var log = (function() {
  var log = '';

  return {
    add: function(msg) {log+=msg+'\n';},
    show: function() {console.log(log);}
  }
})();

function run() {
  var tree = new Node('root');
  var left = new Node('left');
  var right = new Node('right');
  var leftleft = new Node('leftleft');
  var leftright = new Node('leftright');
  var rightleft = new Node('rightleft');
  var rightright = new Node('rightright');

  tree.add(left);
  tree.remove(right);
  tree.add(right);
  tree.add(leftleft);
  tree.add(leftright);
  tree.add(rightleft);
  tree.add(rightright);

  traverse(1, tree);

  log.show();
}