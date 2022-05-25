// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
const { LinkedList } = require("./LinkedList");

/*
    Idea here is that first we will find the size of the linkedlist, then we will subtract num from size+1 to find which element is kth to last.
    Lake a pointer current which is equal to head of the linkedList,run a loop until counter is less than the number we got from size+1-num and in each iteration
    increase value of counter and set current to next of current.
    And finally return the data of current node.
*/
const kthToTheLastElementNaive = (list, num) => {
  let elementToFind = list.length + 1 - num;
  current = list.head;
  let counter = 1;
  while (counter < elementToFind) {
    counter++;
    current = current.next;
  }
  return current.data;
};

/*
    Idea for recursive solution is that we will pass head and the kth element as an input.
    Our base case will be when head is null and when it's null return 0 else again call the method with head.next and kth element value and store it's result +1
    in an index variable. if index is equal to the given kth element then console.log() the head node data.
    finally return the index value for further recursive calls otherwise undefined will be returned.
*/
const kthToTheLastElementRecursive = (head, num) => {
  if (head == null) {
    return 0;
  }
  let index = kthToTheLastElementRecursive(head.next, num) + 1;
  if (index == num) {
    console.log(head.data);
  }
  return index;
};

/*
    Idea here is to use 2 pointers and initially set both to the head of list, we will move first pointer by kth elements and in the second loop we will iterate until
    First pointer is null and with each iteration set both pointers to next of both pointers. This way we will get kth element to last of linkedlist
    Once second loop is finished we will get our desired element which will be at second pointer.
    So, finally return data of second pointer.
*/
const kthToTheLastElementIterative = (list, num) => {
  let current = list.head;
  let next = list.head;
  while (num > 0) {
    current = current.next;
    num--;
  }

  while (current != null) {
    current = current.next;
    next = next.next;
  }
  return next.data;
};

let list = new LinkedList(1);
list.append(2);
list.append(2);
list.append(5);
list.append(2);
list.append(1);
list.append(2);
list.append(10);
list.append(3);
list.append(4);
list.append(5);
list.printList();
console.log(kthToTheLastElementNaive(list, 10));
kthToTheLastElementRecursive(list.head, 10);
console.log(kthToTheLastElementIterative(list, 3));
