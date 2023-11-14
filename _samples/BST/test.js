import { inorder } from "./Traversal/inorder.js";
import { printLevelOrder } from "./Traversal/levelOrder(BFS).js";
import { postorder } from "./Traversal/postorder.js";
import { preorder } from "./Traversal/preorder.js";
import { deleteNode } from "./delete.js";
import { emptyBST } from "./emptyBST.js";
import { height } from "./height.js";
import { insert } from "./insert.js";
import { leftView } from "./leftView.js";
import { minValueNode } from "./minValueNode.js";
import { nodeCount } from "./nodeCount.js";
import { printGivenLevel } from "./nodesAtGivenLevel.js";
import { printLeafNodes } from "./printLeafNodes.js";
import { printNonLeafNode } from "./printNonLeafNode.js";
import { rightView } from "./rightView.js";

let root = null;
root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

//           50
//        /     \
//       30      70
//      /  \    /  \
//    20   40  60   80

console.log("inorder:");
inorder(root);

console.log("preorder:");
preorder(root);

console.log("postorder:");
postorder(root);

console.log("breadth first traveral:");
printLevelOrder(root);

let level = 2;
console.log(`print all nodes at level ${level}`);
printGivenLevel(root, level);

console.log(`print all leaves`);
printLeafNodes(root);

console.log(`print all non-leaves`);
printNonLeafNode(root);

console.log(`print all right view leaves`);
rightView(root);

console.log(`print all leftView view leaves`);
leftView(root);

console.log(`height of the tree : ${height(root)}`);

console.log(`delete node 60`);
root = deleteNode(root, 60);
inorder(root);

console.log(`minValueNode of the tree : ${minValueNode(root).key}`);

console.log(`nodeCount of the tree : ${nodeCount(root)}`);

console.log(`삭제 이전의 BST`);
inorder(root);
emptyBST(root);
