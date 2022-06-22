const BinarySearchTree = require("./BinarySearchTree");
const Queue = require("./../Queue/Queue");
const rightView = (root) => {
  // array to store the final values of nodes which are seen as part of leftView
  let res = [];
  // Creating a queue because we will use BFS to traverse the tree level by level
  let queue = new Queue();
  // adding root of BST to this queue
  queue.enqueue(root);
  // run the loop until queue is not empty
  while (!queue.isEmpty()) {
    // store the current size of queue
    let size = queue.length;
    // run loop from 1 to size of queue
    for (let i = 1; i <= size; i++) {
      // get the front node of the queue and store it in a variable
      let peekedNode = queue.peek();
      // remove the first node from queue
      queue.dequeue();
      // when we are looking from the right of BST only the lastNode of each level will be seen, that's when when i==size of currentLevel Nodes, we will add the peekedNode value into our result array.
      if (i == size) {
        res.push(peekedNode.val);
      }
      // if the peekedNode has a left Node then add it to the queue
      if (peekedNode.left != null) {
        queue.enqueue(peekedNode.left);
      }
      // if the peekedNode has a right Node then add it to the queue
      if (peekedNode.right != null) {
        queue.enqueue(peekedNode.right);
      }
    }
  }

  // finally return the array which contains values of all nodes when seen as rightView.
  return res;
};

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
console.log(rightView(binarySearchTree.root));
