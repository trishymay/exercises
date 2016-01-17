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
  var popped = this.top.val;
  this.top = this.top.next;
  return popped;
};

Stack.prototype.peek = function () {
  return this.top.val;
};

Stack.prototype.isEmpty = function () {
  if (!this.top) return true;
  return false;
};

Stack.prototype.sort = function () {
  var sorted = new Stack();
  var temp;
  while (!this.isEmpty()) {
    if (!temp) {
      temp = this.pop();
    }
    if (sorted.isEmpty() || temp > sorted.peek()) {
      sorted.push(temp);
      temp = null;
    } else {
      this.push(sorted.pop());
    }
  }
  while (!sorted.isEmpty()) {
    this.push(sorted.pop());
  }
}

var stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(1);
stack.push(2);
stack.push(4);

stack.sort();
