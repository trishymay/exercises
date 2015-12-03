function Node (data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.append = function(data) {
  if (data === undefined) return null;
  var node = new Node(data);
  if (!this.length) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
  this.length++;
  return this.length;
}

LinkedList.prototype.prepend = function(data) {
  if (data === undefined) return null;
  var node = new Node(data);
  if (!this.length) {
    this.tail = node;
  } else {
    node.next = this.head;
  }
  this.head = node;
  this.length++;
  return this.length;
}

LinkedList.prototype.toString = function() {
  if (!this.length) return null;
  var current = this.head
  var string = "";
  while (current.next) {
    string += current.data + ", ";
    current = current.next;
  }
  string += this.tail.data;
  return string;
}

LinkedList.prototype.get = function(positionNumber) {
  if (+positionNumber > 0 && +positionNumber <= this.length) {
    var current = this.head;
    for (var i = 1; i < +positionNumber; i++) {
      current = current.next
    }
    return current;
  }
  return null;
}

LinkedList.prototype.toArray = function() {
  if (!this.length) return null;
  var current = this.head;
  var arr = [];
  while (current.next) {
    arr.push (current.data);
    current = current.next;
  }
  arr.push(this.tail.data);
  return arr;
}

LinkedList.prototype.pop = function() {
  if (!this.length)
    return null;
  var popped = this.tail;
  var current = this.head;
  this.length--;
  if (!this.length) {
    this.head = null;
    this.tail = null;
    return popped;
  }
  for (var i = 1; i < this.length; i++) {
    current = current.next
  }
  current.next = null;
  this.tail = current;
  return popped;
}

LinkedList.prototype.shift = function() {
  if (!this.length)
    return null;
  var shifted = this.head;
  list.length--;
    if (!this.length) {
    this.head = null;
    this.tail = null;
    return shifted;
  }
  this.head = this.head.next;
  return shifted;
}

LinkedList.prototype.delete = function(positionNumber) {
  if (!this.length || !positionNumber) return null;
  if (this.length === +positionNumber) return this.pop();
  if (+positionNumber === 1) return this.shift();
  if (+positionNumber > 1 && +positionNumber < this.length) {
    var current = this.head;
    list.length--;
    for (var i = 1; i < positionNumber - 1; i++) {
      current = current.next
    }
    var deleted = current.next;
    current.next = current.next.next;
    return deleted;
  }
  return null;
}

LinkedList.prototype.insert = function(data, positionNumber) {
  if (data === undefined) return null;
  if (!positionNumber) positionNumber = this.length + 1;
  if (+positionNumber > this.length) return this.append(data);
  if (+positionNumber <= 1) return this.prepend(data);
  if (+positionNumber > 1 && +positionNumber <= this.length) {
    var node = new Node(data);
    var current = this.head;
    list.length++;
    for (var i = 1; i < positionNumber - 1; i++) {
      current = current.next
    }
    node.next = current.next;
    current.next = node;
    return list.length;
  }
  return null;
}
