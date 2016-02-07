function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function minBST (arr, start, end) {
  if (!arr || !Array.isArray(arr)) throw new Error ('Invalid Input');
  if (start > end) return null;
  if (start === undefined) start = 0;
  if (end === undefined) end = arr.length - 1;
  var centerIndex = Math.floor((end + start)/2);
  var result = new Node(arr[centerIndex]);
  result.left = minBST(arr, start, centerIndex - 1);
  result.right = minBST(arr, centerIndex + 1, end);
  return result;
}

var arr = [0, 1, 2, 3, 4, 5];
var treeRoot = minBST(arr);
