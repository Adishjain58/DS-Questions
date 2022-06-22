const BinaryNode = require("./BinaryNode");
const BinarySearchTree = require("./BinarySearchTree");

/**
 * Method which will convert a sorted array into to balancedBinarySearchTree
 * @param {*} arr sorted array which needs to be converted
 * @param {*} start starting index from where to start working
 * @param {*} end ending index from where to stop working
 * @returns the root node of the created BST.
 */
const sortedArrayToBst = (arr, start, end) => {
  // base case
  if (start > end) {
    return;
  }
  // first find mid of the current array because if we won't find mid index and work on it then the tree won't be balanced
  let mid = (start + end) >> 1;
  // create a new BST Node with the value which is present at the mid index
  let root = new BinaryNode(arr[mid]);
  // set left of this created node to recursive call and for the end value pass mid-1;
  root.left = sortedArrayToBst(arr, start, mid - 1);
  // set right of this created node to recursive call and for the start value pass mid+1;
  root.right = sortedArrayToBst(arr, mid + 1, end);
  // finally return the node that was created.
  return root;
};

let binarySearchTree = new BinarySearchTree();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let root = sortedArrayToBst(arr, 0, arr.length - 1);
// to check whether the BST was really created
console.log(binarySearchTree.inOrder(root, []));
