const { Node } = require("./../LinkedList/LinkedList");

/**
 * Idea is to create a Queue using LinkedList because in array dequeue operation is very costly.
 */
class Queue {
  // node to keep track of first element in queue because in queue elements are removed from the start.
  first;
  // node to keep track of last element in queue because in queue elements are enetered from end.
  last;
  // variable to keep track of length of queue.
  length;

  // When a new queue is created setting everything to null.
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Method to insert an element into the queue.
   * @param {*} data data that needs to be inserted.
   */
  enqueue = (data) => {
    let newNode = new Node(data);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  };

  /**
   * Method to remove the first element from queue and return it.
   * @returns element which is present at the start of queue
   */
  dequeue = () => {
    if (this.first == null) {
      throw new Error("Queue is empty");
    }
    let poppedNode = this.first;
    this.first = this.first.next;
    if (this.first == null) {
      this.last == null;
    }
    this.length--;
    return poppedNode.data;
  };

  /**
   * Method to return the first element from the queue.
   * @returns element which is present at the start of queue
   */
  peek = () => {
    if (this.first == null) {
      throw new Error("Queue is empty");
    }
    return this.first.data;
  };

  /**
   * Method to determine if queue is empty or not.
   * @returns true or false besed on whether queue is empty
   */
  isEmpty = () => {
    return this.first == null;
  };
}

module.exports = Queue;
