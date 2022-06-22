const BinaryNode = require("./BinaryNode");
const BinarySearchTree = require("./BinarySearchTree");

/**
 * function which will create a Binary tree using postOrder and inOrder provided
 * @param {*} postOrder array containing postOrder elements
 * @param {*} inOrderMap object of inOrder elements
 * @param {*} start starting index of recursion
 * @param {*} end ending index of recursion
 * @returns root node of the created Binary tree
 */
const binaryTreeFromPostAndInOrder = (postOrder, inOrderMap, start, end) => {
  if (start > end) {
    return;
  }
  // create a node out of the elements which is present in postOrder array.
  let root = new BinaryNode(postOrder[postIdx]);
  // find the index of postOrder element from inOrder Map because using this we will divide our array into 2 and perform recursion.
  let idx = inOrderMap[postOrder[postIdx]];
  // for creating the next node we need to increase value of postOrder index variable.
  postIdx--;
  // Note:- In case of postOrder first we will create the right tree and then the left tree
  // set root.right to recursive call of the function and pass start as idx+1.
  root.right = binaryTreeFromPostAndInOrder(
    postOrder,
    inOrderMap,
    idx + 1,
    end
  );
  // set root.left to recursive call of the function and pass end as idx-1.
  root.left = binaryTreeFromPostAndInOrder(
    postOrder,
    inOrderMap,
    start,
    idx - 1
  );
  // finally return the created node.
  return root;
};

let binarySearchTree = new BinarySearchTree();
let inOrder = [3, 1, 4, 0, 5, 2];
let postOrder = [3, 4, 1, 5, 2, 0];
let inOrderMap = {};
// a variable to keep track of index value globally so that we always have access to updated value.
// In postOrder, last element will always be root that's why we are starting from array.length-1.
let postIdx = postOrder.length - 1;
// creating an object of inOrder elements because we need to search for it's elements and get their respective indexes.
for (let i = 0; i < inOrder.length; i++) {
  inOrderMap[inOrder[i]] = i;
}

let root = binaryTreeFromPostAndInOrder(
  postOrder,
  inOrderMap,
  0,
  inOrder.length - 1
);
console.log(binarySearchTree.inOrder(root, []));
console.log(binarySearchTree.postOrder(root, []));
