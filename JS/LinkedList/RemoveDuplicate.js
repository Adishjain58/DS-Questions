const { LinkedList } = require("./LinkedList");

/*
    Idea here is that we will use two pointers, one to keep track of previous value and one which will have the current value.
    Whenever we encounter a unique value we will store it in our object and set prev to current and current to current.next,
    but if a value is already present in the object then that means we need to remove this node, in this case we will set
    next of prev to next of current and current to next of current.
*/
const removeDuplicatesWithBuffer = (list) => {
  let values = {};
  let current = list.head;
  let prev = null;
  while (current != null) {
    if (values[current.data]) {
      prev.next = current.next;
    } else {
      values[current.data] = true;
      prev = current;
    }
    current = current.next;
  }

  list.printList();
};

/*
  The idea here is that we will use two pointers one that will start from head and itearte through the list and other which will start from current and iterate 
  to the end of list. Second pointer will iterate for each value of current. While we are iterating using second node, we will see if the data of next of second pointer
  is same as the data of current pointer, if it's same then that means we need to remove this node, so for that set next of second pointer to next of next of second pointer 
  else set second pointer to next of second pointer.
  after inner loop is finished set current to next of current.
  It's like running 2 loops how we do in arrays to compare each element to all other elements.
  Time Complexity O(n)
  Space Complexity O(1)
*/
const removeDuplicatesWithoutBuffer = (list) => {
  let current = list.head;
  while (current != null) {
    let runner = current;
    while (runner.next != null) {
      if (runner.next.data == current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  list.printList();
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

removeDuplicatesWithBuffer(list);
removeDuplicatesWithoutBuffer(list);
