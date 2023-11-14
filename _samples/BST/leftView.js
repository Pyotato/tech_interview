function leftViewUtil(root, level, max_level) {
  if (root === null) return;
  if (max_level[0] < level) {
    console.log(`\t ${root.key}`);
    max_level[0] = level;
    leftViewUtil(root.left, level + 1, max_level);
    leftViewUtil(root.right, level + 1, max_level);
  }
}
export function leftView(root) {
  const max_level = [0];
  leftViewUtil(root, 1, max_level);
}
