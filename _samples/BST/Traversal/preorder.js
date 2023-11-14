export function preorder(root) {
  if (root != null) {
    console.log(`${root.key}`);
    preorder(root.left);
    preorder(root.right);
  }
}
