const BinaryNode = require("./BinaryNode");
const BinarySearchTree = require("./BinarySearchTree");

/**
 * Function which will tell if both the trees are mirror of each other or not
 * @param {*} root1 root of first Binary tree
 * @param {*} root2 root of second Binary tree
 * @returns true or false depending upon whether the trees are mirror of each other or not
 * Trees are mirror when they have same depth and left of one tree is same as right of other tree.
 */
const areTreesMirrorOfEachOther = (root1, root2) => {
  // if both nodes reaches null at the same time then retun true as both have same depth
  if (root1 == null && root2 == null) {
    return true;
  }
  // if one of the node reaches null before other then we will return false as the trees are not identical
  if (root1 == null || root2 == null) {
    return false;
  }

  // compare values of both the nodes
  // compare left of first tree with right of second tree and right of first tree with left of second tree.
  // Find && of all these operations and return value
  return (
    root1.val == root2.val &&
    areTreesMirrorOfEachOther(root1.left, root2.right) &&
    areTreesMirrorOfEachOther(root1.right, root2.left)
  );
};

// creating 2 trees which are mirror of each other
let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
let root = new BinaryNode(7);
root.left = new BinaryNode(8);
root.right = new BinaryNode(2);
root.right.left = new BinaryNode(5);
root.right.right = new BinaryNode(1);
console.log(areTreesMirrorOfEachOther(binarySearchTree.root, root));
