function removeDuplicates (list) {
  var current = list.head;
  var next = current.next;
  var dictionary = {};
  dictionary[current.data] = 1;
  for (var i = 0; i < list.length; i++) {
    while (dictionary[next.data]) {
      if (next === list.tail) {
        current = list.tail;
        break;
      }
      next = next.next;
    }
    dictionary[next.data] = 1;
    current = next;
  }
  return list;
}