export function height(node) {
  if (node === null) return 0;
  else {
    let lDepth = height(node.left);
    let rDepth = height(node.left);
    if (lDepth > rDepth) return lDepth + 1;
    else return rDepth + 1;
  }
}
