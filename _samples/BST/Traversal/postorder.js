export function postorder(root) {
  if (root != null) {
    postorder(root.left);
    postorder(root.right);
    console.log(`${root.key}`);
  }
}
