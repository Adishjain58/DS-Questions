/*
Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the 
beginning of the loop. 
DEFINITION 
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so 
as to make a loop in the linked list. 
EXAMPLE 
Input: 
Output: 
SOLUTION 
A -> B -> C -> D -> E -> C [the same C as earlier] 
C
*/

const { LinkedList, Node } = require("./LinkedList");

/**
 * Idea here is that we will use 2 pointers, slow pointer which will move one step at a time and fast pointer which will move 2 steps at a time.
 * Iterate until fastPointer!=null && fastPointer.next !=null.
 * After iteration check if fastPointer==null || fastPointer.next ==null, if yes then that means there was no loop so return null.
 * Set slowPointer to head and iterate until slowPointer != fastPointer and with each iteration move both pointers by 1 step.
 * Finally return any of the pointers.
 * @param {*} head head of the linkedlist
 * @returns node from where loop in linkedlist begins or null if there is no loop.
 */
const loopDetection = (head) => {
  // variable to store the slowPointer and set it to head.
  let slowPointer = head;
  // variable to store the fastPointer and set it to head.
  let fastPointer = head;
  // Iterate until fastPointer!=null && fastPointer.next !=null.
  while (fastPointer != null && fastPointer.next != null) {
    // set slowPointer to next of slowPointer.
    slowPointer = slowPointer.next;
    // set fastPointer to next of next of fastPointer.
    fastPointer = fastPointer.next.next;
    // if slowPointer and fastPointer are same then break the loop.
    if (slowPointer == fastPointer) {
      break;
    }
  }
  // if fastPointer==null || fastPointer.next ==null, if yes then that means there was no loop so return null.
  if (fastPointer == null || fastPointer.next == null) {
    return null;
  }
  // set slowPointer to head because if there is a loop then intersection will happen at head to loop no of nodes before the loop is iterated again.
  slowPointer = head;
  // iterate until slowPointer != fastPointer
  while (slowPointer != fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }
  return fastPointer;
};

let list = new LinkedList(7);
list.append(1);
list.append(6);
let newNode = new Node(8);
list.tail.next = newNode;
list.tail = newNode;
list.append(9);
list.append(2);
list.append(5);
list.append(6);
list.append(8);
list.append(9);
list.tail.next = newNode;
// list.printList();
console.log(loopDetection(list.head));
