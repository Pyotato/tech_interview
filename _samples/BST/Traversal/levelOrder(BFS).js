import { height } from "../height.js";
function printGivenLevel(root, level) {
  if (root === null) return;
  if (level === 1) console.log(root.key);
  else if (level > 1) {
    printGivenLevel(root.left, level - 1);
    printGivenLevel(root.right, level - 1);
  }
}
export function printLevelOrder(root) {
  let h = height(root);
  for (let i = 1; i < h + 1; i++) {
    printGivenLevel(root, i);
    console.log("next level");
  }
}
