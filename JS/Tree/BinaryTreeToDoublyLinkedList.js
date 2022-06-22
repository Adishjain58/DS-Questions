const BinarySearchTree = require("./BinarySearchTree");
/**
 * Method which will convert a binary tree into a doubly Linked List
 * @param {*} root
 * @returns
 * Here we will use inOrder Traversal and when we generally print the root's value at that time we will execute our logic.
 * Take two global pointers head and prev, head for head of linkedlist and prev to store the previous element we got during recursion.
 */
const btToDLL = (root) => {
  if (root == null) {
    return;
  }

  btToDLL(root.left);
  // if prev is null that means we still don't have head for our linkedlist
  if (prev == null) {
    // set the root to head
    head = root;
  }
  // otherwise it will be same like when we reverse a linkedList, prev will have the previous node and root will have current node.
  // in a doubly linkedlist we have pointers between both the nodes. So, we will set right of prev to root and left of root to prev,
  // after this set prev to root to set current root as prev node.
  else {
    root.left = prev;
    prev.right = root;
  }
  prev = root;
  btToDLL(root.right);
};

// in case of inverse inOrder only links will be reversed else everything will remain same
const btToDLLInverseInorder = (root) => {
  if (root == null) {
    return;
  }

  btToDLLInverseInorder(root.right);
  if (prev == null) {
    head = root;
  } else {
    root.right = prev;
    prev.left = root;
  }
  prev = root;
  btToDLLInverseInorder(root.left);
};

let head = null,
  prev = null;

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
// btToDLL(binarySearchTree.root);
// while (head != null) {
//   console.log(head.val);
//   head = head.right;
// }
btToDLLInverseInorder(binarySearchTree.root);
while (head != null) {
  console.log(head.val);
  head = head.left;
}
