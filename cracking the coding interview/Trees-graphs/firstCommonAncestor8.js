function ancestor (root, node1, node2) {
  if (!root) throw new Error("Invalid Input");
  if ()
}

function traverse (root, node) {
  if (!root) return;
  if (root === node) return true;
  traverse(root.left);
  traverse(root.right);
}