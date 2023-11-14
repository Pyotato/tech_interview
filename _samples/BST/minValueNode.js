// 트리에서 최소 key를 가진 노드값
export function minValueNode(node) {
  let current = node;
  while (current && current.left !== null) current = current.left;
  return current;
}
