/*
    Partition: Write code to partition a linked list around a value x, such that all nodes less than x come 
before all nodes greater than or equal to x. If x is contained within the list the values of x only need 
to be after the elements less than x (see below). The partition element x can appear anywhere in the 
"right partition"; it does not need to appear between the left and right partitions. 
EXAMPLE 
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5] 
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

const { LinkedList } = require("./LinkedList");

/*
    Idea is to create two LinkedLists, one where we will add all the nodes which have smaller value than the given number and 2nd where we will add all the nodes
    which have larger or equal value to the given number. To do this we will iterate throught the given linkedList and by compairing the current node value
    with the given number, will put the nodes in different linkedlists. Once the iteration is complete 1st LinkedList will have all small numbers less than the given number
    and 2nd LinkedList will have all numbers >= given number.
    After iteration set next of tail of first LinkedList to head of first LinkedList
*/
const partitionNaive = (list, val) => {
  let smallList = null;
  let largeList = null;
  let current = list.head;
  while (current != null) {
    if (current.data < val) {
      if (smallList == null) {
        smallList = new LinkedList(current.data);
      } else {
        smallList.append(current.data);
      }
    } else {
      if (largeList == null) {
        largeList = new LinkedList(current.data);
      } else {
        largeList.append(current.data);
      }
    }
    current = current.next;
  }
  smallList.tail.next = largeList.head;
  smallList.printList();
};

/*
    Idea is to create a new LinkedList and add the nodes which have value less than given value to head and all other values to tail.
*/
const partition = (list, val) => {
  let finalList = null;
  let current = list.head;
  while (current != null) {
    if (finalList == null) {
      finalList = new LinkedList(current.data);
    } else {
      if (current.data < val) {
        finalList.prepend(current.data);
      } else {
        finalList.append(current.data);
      }
    }
    current = current.next;
  }
  finalList.printList();
};

let list = new LinkedList(1);
list.append(1);
list.append(2);
list.append(5);
list.append(2);
list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(4);
list.append(5);
list.printList();
partitionNaive(list, 2);
partition(list, 2);
