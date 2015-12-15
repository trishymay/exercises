var reverseBetween = function(head, m, n) {
  if (m === n) return head;
  var nodeM;
  var nodeN;
  var previousToNodeM = head;
  var current = head.next;
  var previousToCurrent;
  var nodeAfterCurrent;

  for (var i = 2; i <= n; i++){
    if (i === n) {
      nodeN = current;
      break;
    }
    if (i === m) nodeM = current;
    if (i < m) previousToNodeM = previousToNodeM.next;
    current = current.next;
  }
  if (m === 1) {
    previousToNodeM = null;
    nodeM = head;
    head = nodeN;
  }
  if (previousToNodeM !== null) previousToNodeM.next = nodeN;
  nodeAfterCurrent = nodeM.next.next;
  current = nodeM.next;
  nodeM.next = nodeN.next
  previousToCurrent = nodeM;

  for (var j = 0; j < n - m - 1; j++) {
    current.next = previousToCurrent;
    previousToCurrent = current;
    current = nodeAfterCurrent;
    nodeAfterCurrent = nodeAfterCurrent.next;
  }
  current.next = previousToCurrent;
  return head;
};