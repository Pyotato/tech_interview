import { minValueNode } from "./minValueNode.js";
export function deleteNode(root, key) {
  if (root === null) return root;

  // 삭제해야하는 노드의 값의 key가 루트의 key보다 작을 경우 왼쪽 하위 트리에 있어야한다.
  if (key < root.key) root.left = deleteNode(root.left, key);
  // 삭제해야하는 노드의 값의 key가 루트의 key보다 클 경우 오른쪽 하위 트리에 있어야한다.
  else if (key > root.key) root.right = deleteNode(root.right, key);
  //
  else {
    //자식 노드가 하나 있거나 자식 노드가 없을 경우
    if (root.left === null) {
      const temp = root.right;
      root = null;
      return temp;
    } else if (root.right === null) {
      const temp = root.left;
      root = null;
      return temp;
    }

    // 자식 노드가 두개라면 오른쪽 하위 트리의 가장 작은 값을 가져와서
    let temp = minValueNode(root.right);

    // inorder 순서의 첫번째 자식 노드를 가져와서
    root.key = temp.key;

    // 삭제
    root.right = deleteNode(root.right, temp.key);
  }
  return root;
}
