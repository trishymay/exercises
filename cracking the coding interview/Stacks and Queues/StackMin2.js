function StackNode (val) {
  this.val = val;
  this.next = null;
}

function Stack () {
  this.top = null;
  this.min = [];
}

Stack.prototype.push = function (val) {
  if (!val) return null;
  var node = new StackNode(val);
  if (!this.min.length || val <= this.min[this.min.length - 1].val) {
    this.min.push(node);
  }
  if (this.top) {
    node.next = this.top;
  }
  this.top = node;
};

Stack.prototype.pop = function () {
  if (!this.top) return null;
  var popped = this.top;
  if (popped === this.min[this.min.length - 1]) {
    this.min.pop();
  }
  this.top = this.top.next;
  popped.next = null;
  return popped;
};

Stack.prototype.stackMin = function () {
  if (!this.min.length) return null;
  return this.min[this.min.length - 1];
}