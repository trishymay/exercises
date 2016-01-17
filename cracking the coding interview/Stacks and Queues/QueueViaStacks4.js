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

function Queue () {
  this.stacked = new Stack;
  this.queued = new Stack;
}

Queue.prototype.add = function (val) {
  if (!val) return null;
  this.stacked.push(val);
};

Queue.prototype.remove = function () {
  if (!this.stacked.top && !this.queued.top) return null;
  if (!this.queued.top) {
    while (this.stacked.top) {
      var popped = this.stacked.pop();
      this.queued.push(popped.val);
    }
  }
  return this.queued.pop();
};

Queue.prototype.peek = function () {
  if (!this.stacked.top && !this.queued.top) return null;
  if (!this.queued.top) {
    while (this.stacked.top) {
      var popped = this.stacked.pop();
      this.queued.push(popped.val);
    }
  }
  return this.queued.top;
};

Queue.prototype.isEmpty = function () {
 if (!this.stacked.top && !this.queued.top) return true;
 return false;
};

var q = new Queue;
q.add(1);
q.add(2);
q.add(3);
q.add(4);
