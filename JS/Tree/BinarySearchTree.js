const BinaryNode = require("./BinaryNode");
// idea is to create a binarySearchTree with insert, remove, lookup methods
class BinarySearchTree {
  // node to store the root of BST
  root;

  constructor() {
    this.root = null;
  }

  /**
   * Method to insert a new node in the BST
   * @param {*} val
   */
  insert = (val) => {
    // Creating a new node for the given value
    let newNode = new BinaryNode(val);
    // if root is null then that means it is the first node. So, set root to the newNiode
    if (this.root == null) {
      this.root = newNode;
    } else {
      // store the root in a variable
      let currentNode = this.root;
      while (true) {
        // if the provided value is less than the value of currentNode that means we need to insert the node to left of this node.
        if (val < currentNode.val) {
          // if left of currentNode is null then set it to newNode and break the loop
          if (currentNode.left == null) {
            currentNode.left = newNode;
            break;
          }
          // otherwise set currentNode to left of currentNode.
          currentNode = currentNode.left;
        }
        // if the provided value is >= value of currentNode then that means this node will be inserted to the right of currentNode.
        else {
          // if right of currentNode is null then set it to newNode and break the loop.
          if (currentNode.right == null) {
            currentNode.right = newNode;
            break;
          }
          // else set currentNode to right of currentNode.
          currentNode = currentNode.right;
        }
      }
    }
  };

  /**
   * Method to remove a node which has the same value as the provided value.
   * @param {*} val
   */
  remove = (val) => {
    if (!this.root) {
      return false;
    }

    // Node to store the root of the BST
    let currentNode = this.root;
    // Node to store the parent of currentNode, initially it will be null
    let parentNode = null;
    // run a loop until currentNode is not equal to null
    while (currentNode != null) {
      // if the provided value is less than the currentNode value then set parentNode to currentNode and currentNode to left of currentNode.
      if (val < currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      // if the provided value is greater than the currentNode value then set parentNode to currentNode and currentNode to right of currentNode.
      else if (val > currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      // if the provided value is equal to a value of currentNode then we have 3 cases.
      else {
        // case 1 : when then is no right of currentNode
        if (currentNode.right == null) {
          // if parentNode is null then that means it's the root node whose value is equal to given value
          if (parentNode == null) {
            // in this case simply set root to left of currentNode.
            this.root = currentNode.left;
          } else {
            //if parent > currentNode value, set left of parentNode to left of currentNode.
            if (currentNode.val < parentNode.val) {
              parentNode.left = currentNode.left;
            }
            // else set right of parentNode to left of currentNode
            else {
              parentNode.right = currentNode.left;
            }
          }
        }
        // case 2 : if there is no left of right of currentNode
        else if (currentNode.right.left == null) {
          // set left of right of currentNode to left of currentNode. because left of currentNode will always be smaller than the right of currentNode.
          // because of this we can make left of currentNode the right.left of currentNode.
          currentNode.right.left = currentNode.left;
          // if parentNode is null then that means it's the root node whose value is equal to given value
          if (parentNode == null) {
            // in this case simply set root to right of currentNode.
            this.root = currentNode.right;
          } else {
            //if parent > currentNode value, set left of parentNode to right of currentNode.
            if (currentNode.val < parentNode.val) {
              parentNode.left = currentNode.right;
            }
            // else set right of parentNode to right of currentNode
            else {
              parentNode.right = currentNode.right;
            }
          }
        }
        // case 3 : when there is a left of right of currentNode
        else {
          // store currentNode.right.left as the leftMost node.
          let leftMost = currentNode.right.left;
          // store currentNode.right as the leftMostParent node.
          let leftmostParent = currentNode.right;
          // we will find the leftMost node which is not null and with each iteration we will set leftMostparent to leftMost and leftMost to left of leftMost
          while (leftMost.left != null) {
            leftmostParent = leftMost;
            leftMost = leftMost.left;
          }

          leftmostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;
          if (parentNode == null) {
            this.root = leftMost;
          } else {
            if (currentNode.val < parentNode.val) {
              parentNode.left = leftMost;
            } else {
              parentNode.right = leftMost;
            }
          }
        }
      }
    }

    return true;
  };

  /**
   * Method to search for a value in the tree
   * @param {*} val
   * @returns true or false based on whether the value was found or not
   */
  lookup = (val) => {
    // if root is null then return false.
    if (!this.root) {
      return false;
    } else {
      // store the root
      let head = this.root;
      // run loop until head is not equal to null
      while (head) {
        // if value is equal to value of the head node then return true
        if (head.val == val) {
          return true;
        }
        // if value is less than the value of head node then set head to left of head
        else if (val < head.val) {
          head = head.left;
        }
        // else set head to right of hrad
        else {
          head = head.right;
        }
      }
      // if loop is finished and we reach this point then it means the value was not found. SO, return false.
      return false;
    }
  };

  /**
   * Method which return the inorder view of BST i.e. left root right
   * @param {*} root root element of the tree
   * @param {*} arr array where the data will be stored and returned
   * @returns the array containing elements of inorder tree
   */
  inOrder = (root, arr) => {
    if (root == null) {
      return;
    }
    this.inOrder(root.left, arr);
    arr.push(root.val);
    this.inOrder(root.right, arr);
    return arr;
  };

  /**
   * Method which return the preOrder view of BST i.e. root left right
   * @param {*} root root element of the tree
   * @param {*} arr array where the data will be stored and returned
   * @returns the array containing elements of preOrder tree
   */
  preOrder = (root, arr) => {
    if (root == null) {
      return;
    }
    arr.push(root.val);
    this.preOrder(root.left, arr);
    this.preOrder(root.right, arr);
    return arr;
  };

  /**
   * Method which return the postOrder view of BST i.e. left right root
   * @param {*} root root element of the tree
   * @param {*} arr array where the data will be stored and returned
   * @returns the array containing elements of postOrder tree
   */
  postOrder = (root, arr) => {
    if (root == null) {
      return;
    }
    this.postOrder(root.left, arr);
    this.postOrder(root.right, arr);
    arr.push(root.val);
    return arr;
  };
}

module.exports = BinarySearchTree;
