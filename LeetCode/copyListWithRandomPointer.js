function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}

var copyRandomList = function(head) {
  if (!head) return head;
  var current = head;
  var ind = 0;
  var pointers = [];
  while (current) {
    current.index = ind++;
    pointers.push(new RandomListNode(current.label));
    current = current.next;
  }
  current = head;
  for (var i = 0; i < pointers.length; i++) {
    var nextI = current.next ? current.next.index : null;
    var randomI = current.random ? current.random.index : null;
    if (nextI !== null) pointers[i].next = pointers[nextI];
    if (randomI !== null) pointers[i].random = pointers[randomI];
    current = current.next;
  }
  current = head;
  while (current) {
    delete current.index;
    current = current.next;
  }
  return pointers[0];
};

var head = new RandomListNode(1);
head.next = new RandomListNode(2);
head.next.next = new RandomListNode(3);
head.next.next.next = new RandomListNode(4);
head.random = head.next.next.next;
head.next.next.next.random = head.next.next;