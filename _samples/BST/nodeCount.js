export function nodeCount(node) {
  if (node === null) return 0;
  else return nodeCount(node.left) + nodeCount(node.right) + 1;
}
