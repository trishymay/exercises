function StackNode (val) {
  this.val = val;
  this.next = null;
}

function Stack () {
  this.top = null;
  this.size = 0;
}

function SetOfStacks (maxStackSize) {
  this.stacks = [];
  this.maxSize = Number(maxStackSize) || 50;
}

Stack.prototype.push = function (val) {
  if (!val) return null;
  var node = new StackNode(val);
  if (this.top) {
    node.next = this.top;
  }
  this.top = node;
  this.size++;
};

Stack.prototype.pop = function () {
  if (!this.top) return null;
  var popped = this.top;
  this.top = this.top.next;
  this.size--;
  popped.next = null;
  return popped;
};

SetOfStacks.prototype.push = function (val) {
  if (!this.stacks.length || this.stacks[this.stacks.length - 1].size >= this.maxSize) {
    this.stacks.push(new Stack());
  }
  var currentStack = this.stacks[this.stacks.length - 1];
  currentStack.push(val);
};

SetOfStacks.prototype.pop = function () {
  var currentStack = this.stacks[this.stacks.length - 1];
  if (!currentStack) return null;
  var popped = currentStack.pop();
  if (!currentStack.size)
    this.stacks.pop();
  return popped;
};

SetOfStacks.prototype.popAt = function (index) {
  if (!this.stacks[index]) return null;
  var result = this.stacks[index].pop();
  for (var i = this.stacks.length - 1; i > index; i--) {
    var currentStack = this.stacks[i];
    var popped;
    if (currentStack.size === 1) {
      popped = currentStack.pop();
      this.stacks.pop();
    } else {
      var currentNode = currentStack.top;
      while (currentNode.next.next) currentNode = currentNode.next;
      popped = currentNode.next;
      currentNode.next = null;
      currentStack.size--;
    }
    popped.next = this.stacks[i-1].top;
    this.stacks[i-1].top = popped;
    this.stacks[i-1].size++;
  }
  return result;
};

var stacks = new SetOfStacks(2);
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);


