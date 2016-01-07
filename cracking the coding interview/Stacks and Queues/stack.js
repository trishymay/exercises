function StackNode (val) {
  this.val = val;
  this.next = null;
}

function Stack () {
  this.top = null;
}

Stack.prototype.push = function (val) {
  if (!val) return null;
  var node = new StackNode(val);
  if (this.top) {
    node.next = this.top;
  }
  this.top = node;
};

Stack.prototype.pop = function () {
  if (!this.top) return null;
  var popped = this.top;
  this.top = this.top.next;
  popped.next = null;
  return popped;
};

Stack.prototype.peek = function () {
  return this.top;
};

Stack.prototype.isEmpty = function () {
  if (!this.top) return true;
  return false;
};