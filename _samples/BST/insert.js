import { Node } from "./BinarySearchTree.js";

export function insert(node, key) {
  if (node == null) return new Node(key); //트리가 비어있다면 새 노드 리턴
  if (key < node.key)
    node.left = insert(node.left, key); //트리의 key보다 작다면 왼쪽 트리에 추가
  else if (key > node.key) node.right = insert(node.right, key); //크다면 오른쪽에 노드 추가
  return node;
}
