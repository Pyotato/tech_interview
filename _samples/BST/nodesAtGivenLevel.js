export function printGivenLevel(root, level) {
  if (root === null) return;
  if (level === 1) console.log(root.key);
  else if (level > 1) {
    printGivenLevel(root.left, level - 1);
    printGivenLevel(root.right, level - 1);
  }
}
