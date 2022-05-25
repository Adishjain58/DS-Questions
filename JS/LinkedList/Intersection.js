/*
Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the 
intersecting node. Note that the intersection is defined based on reference, not value. That is, if the 
kth node of the first linked list is the exact same node (by reference) as the jth node of the second 
linked list, then they are intersecting.
*/

const { LinkedList, Node } = require("./LinkedList");

/*
    Idea is that we will have two pointers one will store head of first linkedlist and 2nd will store head of 2nd linkedlist.
    A counter variable to keep track of how many times we have set the pointer of first list to head of second and vice-versa.
    A isIntersectionPresent to determine whether an intersection is present or not, initially it will be set to false.
    Itearate until counter<=2, because if intersection is there then only after changing the pointer's head 2 times we will get same nodes from both nodes and we can 
    break the loop.
*/
const getIntersectionNodeNaive = (head1, head2) => {
  // pointer to store head of first list.
  let firstCurrent = head1;
  // pointer to store head of second list.
  let secondCurrent = head2;
  // variable to keep track of how many times we have set the pointer of first list to head of second and vice-versa.
  let counter = 0;
  // variable to determine whether an intersection is present or not
  let isIntersectionPresent = false;
  while (counter <= 2) {
    // if the firstCurrent is null then set it to head2 and increase counter.
    if (firstCurrent == null) {
      firstCurrent = head2;
      counter++;
    }
    // if secondCurrent is null then set it to head1 and increase counter.
    if (secondCurrent == null) {
      secondCurrent = head1;
      counter++;
    }
    // if both firstCurrent and secondCurrent are not null and both are equal then that means intersection is present and we can break the loop.
    if (
      firstCurrent == secondCurrent &&
      firstCurrent != null &&
      secondCurrent != null
    ) {
      isIntersectionPresent = true;
      break;
    }
    // set firstCurrent to next of firstCurrent.
    firstCurrent = firstCurrent.next;
    // set secondCurrent to next of secondCurrent.
    secondCurrent = secondCurrent.next;
  }
  // if intersection is there then return the node else return null
  return isIntersectionPresent ? firstCurrent : null;
};

/*
    Idea here is that if the tail nodes of both linkedlists are not same then that means there is no intersection and return null.
    Else iterate until firstPointer!=secondPointer and return any of the both pointers.
*/

const getIntersectionNode = (list1, list2) => {
  if (list1.tail != list2.tail) {
    return null;
  }

  let head1 = list1.head;
  let head2 = list2.head;
  // pointer to store head of first list.
  let firstCurrent = head1;
  // pointer to store head of second list.
  let secondCurrent = head2;

  while (firstCurrent != secondCurrent) {
    // if firstCurrent is null then set it to head of 2nd linkedlist so that both pointers can reach the same node.
    if (firstCurrent == null) {
      firstCurrent = head2;
    } else {
      firstCurrent = firstCurrent.next;
    }
    // if secondCurrent is null then set it to head of 1st linkedlist so that both pointers can reach the same node.
    if (secondCurrent == null) {
      secondCurrent = head1;
    } else {
      secondCurrent = secondCurrent.next;
    }
  }

  return firstCurrent;
};

/*
    One way how this approach is different from above is that instead of changing pointers from one linkedlist to another,
    we will move the large list by the diff in their length, so that when we iterate through both at the same time, both lists will end at the same time.
*/
const getIntersectionNodeSecondApproach = (list1, list2) => {
  if (list1.tail != list2.tail) {
    return null;
  }

  let head1 = list1.head;
  let head2 = list2.head;
  // pointer to store head of first list.
  let firstCurrent = head1;
  // pointer to store head of second list.
  let secondCurrent = head2;
  if (list1.length > list2.length) {
    firstCurrent = moveLinkedListByGivenNumber(
      list1.length - list2.length,
      firstCurrent
    );
  } else {
    secondCurrent = moveLinkedListByGivenNumber(
      list2.length - list1.length,
      secondCurrent
    );
  }

  while (firstCurrent != secondCurrent) {
    firstCurrent = firstCurrent.next;
    secondCurrent = secondCurrent.next;
  }
  return firstCurrent;
};

const moveLinkedListByGivenNumber = (num, node) => {
  while (num > 0 && node != null) {
    node = node.next;
    num--;
  }
  return node;
};

let list = new LinkedList(7);
list.append(1);
list.append(6);
list.append(9);
list.append(9);
list.append(9);
list.append(9);
list.append(9);
list.append(9);
let list2 = new LinkedList(5);
list2.append(9);
list2.append(3);
list2.append(9);

let newNode = new Node(10);
list.tail.next = newNode;
list.tail = newNode;
list2.tail.next = newNode;
list2.tail = newNode;
newNode = new Node(11);
list.tail.next = newNode;
list.tail = newNode;
list2.tail.next = newNode;
list2.tail = newNode;
list.printList();
list2.printList();
console.log("Result", getIntersectionNodeNaive(list.head, list2.head));
console.log("Result", getIntersectionNode(list, list2));
console.log("Result", getIntersectionNodeSecondApproach(list, list2));
