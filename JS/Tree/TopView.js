const BinarySearchTree = require("./BinarySearchTree");
const Queue = require("./../Queue/Queue");

// idea of topView is that we will assign a 0 value to the root node and when iterating through the tree, for the left node, subtract 1 from the current root node's assigned value
// and for the right node, add 1 to the current root node's assigned value. So, that we can know which nodes overlap each other.
// if multiple nodes have same assigned value then that means all nodes other than the first node which has this value will be overlapped by this node and won't be visible
// from topview.
// Maintain a set so where we will check if the assigned value of currentNode is present in set or not
// if it is not present then this node is of the topView and add the currentNode's value to the result and add the currentNode's assigned value to set
const topView = (root) => {
  // set to store the assigned value of the nodes.
  let set = new Set();
  // array to store our final result
  let res = [];
  // creating a new queue in which for each node we will store an array with node and a assigned value to that node.
  let queue = new Queue();
  // initially add array of root node and 0 value to the queue.
  queue.enqueue([root, 0]);
  // run the loop until queue is not empty
  while (!queue.isEmpty()) {
    // get the first array from the queue and store it in a variable
    let peekedArray = queue.peek();
    // get the node from the peekedArray.
    let peekedNode = peekedArray[0];
    // get the assignedValue from the peekedArray.
    let peekedValue = peekedArray[1];
    // remove the first array from queue.
    queue.dequeue();
    // check if our set has the assignedValue of this node. If it is not present then that means this node is unique when seen from top view and won't be overlapped by some other node.
    if (!set.has(peekedValue)) {
      // add the assignedValue of the peekedNode to set
      set.add(peekedValue);
      // add value of peekNode to the result array
      res.push(peekedNode.val);
    }
    // if left of peekedNode is not equal to null then add array of left of peekedNode and peekedValue - 1 to the queue.
    if (peekedNode.left != null) {
      queue.enqueue([peekedNode.left, peekedValue - 1]);
    }
    // if right of peekedNode is not equal to null then add array of right of peekedNode and peekedValue + 1 to the queue.
    if (peekedNode.right != null) {
      queue.enqueue([peekedNode.right, peekedValue + 1]);
    }
  }
  // finally return the result array
  return res.sort((a, b) => a - b);
};

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(8);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
console.log(topView(binarySearchTree.root));
