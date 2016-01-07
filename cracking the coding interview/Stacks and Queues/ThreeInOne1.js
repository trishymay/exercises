function StackNode (val) {
  this.val = val;
  this.next = null;
}

function Stack () {
  this.top = null;
}

//assuming you are given three arrays of values, implement three stacks using only one array
function threeInOne (arr1, arr2, arr3) {
  if (!arr1 || !arr2 || !arr3) return null;
  var result = [];
  for (var i = 0; i < 3; i++) {
    var vals = arguments[i];
    if (!Array.isArray(vals)) return null;
    var stack = new Stack();
    result.push(stack);
    for (var j = 0; j < vals.length; j++) {
      var node = new StackNode(vals[j]);
      if (stack.top) {
        node.next = stack.top;
      }
      stack.top = node;
    }
  }
  return result;
}

var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];