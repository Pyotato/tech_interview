export function printLeafNodes(root) {
  if (root === null) return;
  if (!root.left && !root.right) console.log(root.key);
  if (root.left) printLeafNodes(root.left); // 왼쪽 자식 노드가 있다면 leaf 찾을 때까지 반뽁
  if (root.right) printLeafNodes(root.right); // 오른쪽 자식 노드가 있다면 leaf 찾을 때까지 반뽁
}
