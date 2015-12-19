var maxDepth = function(root) {
  var depth = 0;
  if (!root) return depth;
  var left = maxDepth(root.left);
  var right = maxDepth(root.right);
  depth += left > right ? left : right;
  return depth + 1;
};