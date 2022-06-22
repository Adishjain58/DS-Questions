const BinarySearchTree = require("./BinarySearchTree");

// Question here is to find the maximun height of a tree from it's root node to any of the leaf nodes.
// To solve this we will use DFS and recursion.
const maximumDepth = (root) => {
  // if root is null then return 0
  if (root == null) {
    return 0;
  }
  // store the value returned from the recursive function and pass root.left in the recursive call.
  // here we will get the maximum height for each level for a left node of the tree.
  let leftVal = maximumDepth(root.left);
  // store the value returned from the recursive function and pass root.right in the recursive call.
  // here we will get the maximum height for each level for a right node of the tree.
  let rightVal = maximumDepth(root.right);
  // finally we will return max of height of both left and right subtrees as we need the max height and add 1
  // because without adding 1 we will only get height upto the current nodes child nodes
  return Math.max(leftVal, rightVal) + 1;
};

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(6);
console.log(maximumDepth(binarySearchTree.root));
