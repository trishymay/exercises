var MinStack = function() {
  this.stack = [];
  this.min;
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min === undefined || x < this.min) this.min = x;
};

MinStack.prototype.pop = function() {
  var popped = this.stack.pop();
  if (popped === this.min) {
    this.min = undefined;
    for (var i = 0; i < this.stack.length; i++) {
      if (this.min === undefined || this.stack[i] < this.min)
        this.min = this.stack[i];
    }
  }
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min;
};