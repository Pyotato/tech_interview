import { deleteNode } from "./delete.js";

export function emptyBST(root) {
  if (root !== null) {
    emptyBST(root.left);
    emptyBST(root.right);
    console.log("released node: ", root.key);
    deleteNode(root);
  }
}
