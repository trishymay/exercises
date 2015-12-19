var minDepth = function(root) {
  if (!root) return 0;
  var depth = minDepth(root.left);
  var alt = minDepth(root.right);
  !depth ? depth = alt : depth = alt && depth > alt ? alt : depth;
  return depth + 1;
}