/*
 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but 
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to 
that node. 
EXAMPLE 
lnput:the node c from the linked list a->b->c->d->e->f 
Result: nothing is returned, but the new linked list looks like a ->b->d->e->f 
*/

const { LinkedList } = require("./LinkedList");

/*
    Idea here is to use 2 pointers slowPointer and fastPointer, both of which intitially are set to head of the list.
    Run loop until next of fastPointer is not equal to null and next of next of fastPointer is not equal to null. Inside this loop set prev to slowPointer, slowPointer to 
    next of slowPointer and fastPointer to next of next of fastPointer.
    Once loop is finished return slowPointer as it will point to middle of linkedList.
*/
const findMiddleNode = (list) => {
  let slowPointer = list.head,
    fastPointer = list.head,
    prev = null;
  while (fastPointer.next != null && fastPointer.next.next != null) {
    prev = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};

/*
    Function to delete the given node from LinkedList when only the node that we need to delete is given. 
*/
const deleteMiddleNode = (node) => {
  // this solution can only work if node and node.next is not null.
  if (node == null || node.next == null) {
    return false;
  }

  // get the next node of the given node.
  let nextNode = node.next;
  // set data of given node to data of the nextNode.
  node.data = nextNode.data;
  // set next of given node to next of the nextNode.
  node.next = nextNode.next;
  return true;
};

let list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(5);
list.append(2);
list.append(1);
list.append(2);
list.append(10);
list.append(3);
list.append(4);
list.append(5);
list.printList();
let node = findMiddleNode(list);
deleteMiddleNode(node);
list.printList();
