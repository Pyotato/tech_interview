export function printNonLeafNode(root) {
  //빈 트리 또는 자식들이 더이상 없다면
  if (root === null || (root.left === null && root.right === null)) return;
  //현재 node가 leaf가 아니라면(자식 노드가 있다면)
  if (root.left !== null || root.right !== null) console.log(root.key);
  // 루트가 null이 아니고 자식 노드또한 null이 아닌 경우
  printNonLeafNode(root.left);
  printNonLeafNode(root.right);
}
