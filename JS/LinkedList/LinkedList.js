/*
  Main approaches to solve LinkedList question are using recursion or 2 pointers approach
*/
class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head;
  tail;
  length = 0;

  constructor(data) {
    let newNode = new Node(data);
    this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  append = (data) => {
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  };

  prepend = (data) => {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  };

  deleteNode = (data) => {
    let prev = null,
      current = this.head;
    let isNodePresent = true;
    while (current.data != data && current != null) {
      prev = current;
      current = current.next;
      if (current == null) {
        isNodePresent = false;
      }
    }
    if (!isNodePresent) {
      console.log("This node is not present in LinkedList");
    } else {
      prev.next = current.next;
      this.length--;
    }
  };

  isListEmpty = () => {
    return this.length ? false : true;
  };

  printList = () => {
    console.log("List print starts from here");
    let current = this.head;
    let printData = "";
    while (current != null) {
      printData += current.data + " ";
      current = current.next;
    }
    console.log(printData);
  };
}

module.exports = { LinkedList, Node };
