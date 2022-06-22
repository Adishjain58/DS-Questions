const BinarySearchTree = require("./BinarySearchTree");

/**
 * Function which will tell if both the trees are identical or not
 * @param {*} root1 root of first Binary tree
 * @param {*} root2 root of second Binary tree
 * @returns true or false depending upon whether the trees are identical or not
 * Trees are identical when values of all the nodes on same level are same and they have same depth
 */
const areTreesIdentical = (root1, root2) => {
  // if both nodes reaches null at the same time then retun true as both have same depth
  if (root1 == null && root2 == null) {
    return true;
  }
  // if one of the node reaches null before other then we will return false as the trees are not identical
  if (root1 == null || root2 == null) {
    return false;
  }

  // compare values of both the nodes
  // compare left of both roots and right of both roots.
  // find && of all these operations and return value
  return (
    root1.val == root2.val &&
    areTreesIdentical(root1.left, root2.left) &&
    areTreesIdentical(root1.right, root2.right)
  );
};

// creating 2 identical trees
let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
let binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(7);
binarySearchTree2.insert(2);
binarySearchTree2.insert(8);
binarySearchTree2.insert(1);
binarySearchTree2.insert(5);
console.log(areTreesIdentical(binarySearchTree.root, binarySearchTree2.root));
