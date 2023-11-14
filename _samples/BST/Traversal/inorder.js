export function inorder(root) {
  if (root != null) {
    inorder(root.left);
    console.log(`${root.key}`);
    inorder(root.right);
  }
}
