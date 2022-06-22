const { Node } = require("./../LinkedList/LinkedList");

/**
 * Idea is to create a Stack using LinkedList and it will have 4 methods, push, pop, peek and isEmpty.
 */
class Stack {
  // Node to keep track of top of stack
  top;
  // variable to keep track of length of stack
  length;

  // Initialize stack to null
  constructor() {
    top = null;
    length = 0;
  }
  /**
   * Method to add new data into the stack
   * @param {*} data data that needs to be added.
   */
  push = (data) => {
    let newNode = new Node(data);
    if (top == null) {
      top = newNode;
    } else {
      // while building a stack we need to create a reverse linkedList because elements will be removed from the top.
      newNode.next = top;
      top = newNode;
    }
    this.length++;
  };

  /**
   * Method to remove an element from top of the stack and return it's data.
   * @returns data which is stored at top.
   */
  pop = () => {
    if (top == null) {
      throw new Error("Stack is Empty");
    }

    let poppedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return poppedNode.data;
  };

  /**
   * Method to retrieve the data of top element from stack.
   * @returns data which is stored at top
   */
  peek = () => {
    if (top == null) {
      throw new Error("Stack is Empty");
    }
    return this.top.data;
  };

  /**
   * Method to check if stack is empty or not.
   * @returns true or false based on whether stack is empty
   */
  isEmpty = () => {
    return top == null;
  };
}

module.exports = Stack;
