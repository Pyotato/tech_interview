function rightViewUtil(root, level, max_level) {
  if (root === null) return;
  if (max_level[0] < level) {
    console.log(`\t ${root.key}`);
    max_level[0] = level;
    rightViewUtil(root.right, level + 1, max_level);
    rightViewUtil(root.left, level + 1, max_level);
  }
}
export function rightView(root) {
  const max_level = [0];
  rightViewUtil(root, 1, max_level);
}
