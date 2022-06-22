const BinaryNode = require("./BinaryNode");
const BinarySearchTree = require("./BinarySearchTree");

// a variable to keep track of index value globally so that we always have access to updated value.
// In PreOrder first element will always be root that's why we are starting from 0.
let preIdx = 0;
/**
 * function which will create a Binary tree using preOrder and inOrder provided
 * @param {*} preOrder array containing preOrder elements
 * @param {*} inOrderMap object of inOrder elements
 * @param {*} start starting index of recursion
 * @param {*} end ending index of recursion
 * @returns root node of the created Binary tree
 */
const binaryTreeFromPreAndInOrder = (preOrder, inOrderMap, start, end) => {
  if (start > end) {
    return;
  }
  // create a node out of the elements which is present in preOrder array.
  let root = new BinaryNode(preOrder[preIdx]);
  // find the index of preOrder element from inOrder Map because using this we will divide our array into 2 and perform recursion.
  let idx = inOrderMap[preOrder[preIdx]];
  // for creating the next node we need to increase value of preOrder index variable.
  preIdx++;
  // set root.left to recursive call of the function and pass end as idx-1.
  root.left = binaryTreeFromPreAndInOrder(preOrder, inOrderMap, start, idx - 1);
  // set root.right to recursive call of the function and pass start as idx+1.
  root.right = binaryTreeFromPreAndInOrder(preOrder, inOrderMap, idx + 1, end);
  // finally return the created node.
  return root;
};

let binarySearchTree = new BinarySearchTree();
let inOrder = [3, 1, 4, 0, 5, 2];
let preOrder = [0, 1, 3, 4, 2, 5];
let inOrderMap = {};
// creating an object of inOrder elements because we need to search for it's elements and get their respective indexes.
for (let i = 0; i < inOrder.length; i++) {
  inOrderMap[inOrder[i]] = i;
}

let root = binaryTreeFromPreAndInOrder(
  preOrder,
  inOrderMap,
  0,
  inOrder.length - 1
);
console.log(binarySearchTree.inOrder(root, []));
console.log(binarySearchTree.preOrder(root, []));
console.log(binarySearchTree.postOrder(root, []));
