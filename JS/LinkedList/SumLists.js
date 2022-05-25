/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single 
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a 
function that adds the two numbers and returns the sum as a linked list. 
EXAMPLE 
Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295. 
Output: 2 -> 1 -> 9. That is, 912. 
FOLLOW UP 
Suppose the digits are stored in forward order. Repeat the above problem. 
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. 
Output: 9 -> 1 -> 2. That is, 912.
*/

const { LinkedList, Node } = require("./LinkedList");

/*
    Idea here is that we will iterate through both linkedLists and maintain a carry variable because when we add 2 numbers there is a chance of carry and
    this variable will intially be set to 0.
*/
const sumListsWithoutUsingLinkedList = (head1, head2) => {
  // Variable using which we will create our linkedList.
  let res = null;
  // to store the head of the new LinkedList
  let head = null;
  // to maintain carry in case the sum of 2 numbers exceeds 9.
  let carry = 0;
  // iterate until one if the linkedlist reaches null.
  while (head1 != null && head2 != null) {
    // finding total of carry and data of both linkedlist's nodes
    let val = carry + head1.data + head2.data;
    // finding if carry will be there or not.
    carry = val >= 10 ? Math.floor(val / 10) : 0;
    // if sum>9 then we will only take the last element that's why finding modulus by 10.
    val = val % 10;
    // if res is null then that means linkedlist hasn't been created yet so setting it to newNode and head to res to know the head position.
    if (res == null) {
      res = new Node(val);
      head = res;
    }
    // else set next of res to new node and res to next of res.
    else {
      res.next = new Node(val);
      res = res.next;
    }
    // with each iteration set head1 to next of head1 and head2 to next of head2.
    head1 = head1.next;
    head2 = head2.next;
  }

  // After the first iteration only one list can have some nodes still left, that's why appending all those nodes by adding with carry.
  while (head1 != null) {
    let val = carry + head1.data;
    carry = val >= 10 ? Math.floor(val / 10) : 0;
    val = val % 10;
    res.next = new Node(val);
    head1 = head1.next;
    res = res.next;
  }

  // After the first iteration only one list can have some nodes still left, that's why appending all those nodes by adding with carry.
  while (head2 != null) {
    let val = carry + head2.data;
    carry = val >= 10 ? Math.floor(val / 10) : 0;
    val = val % 10;
    res.next = new Node(val);
    head2 = head2.next;
    res = res.next;
  }
  // If after all these iterations carry>0 that means last digit sum was greater that 9 so we need to append a node with carry value as well
  if (carry > 0) {
    res.next = new Node(carry);
  }

  return head;
};

/*
    Logic is same as above, only diff is instead of creating linkedlist using Node class I am simply using Linkedlist class here.
*/
const sumListsUsingLinkedList = (head1, head2) => {
  let res = null;
  let carry = 0;
  while (head1 != null && head2 != null) {
    let val = carry + head1.data + head2.data;
    carry = val >= 10 ? Math.floor(val / 10) : 0;
    val = val % 10;
    if (res == null) {
      res = new LinkedList(val);
    } else {
      res.append(val);
    }
    head1 = head1.next;
    head2 = head2.next;
  }

  while (head1 != null) {
    let val = carry + head1.data;
    carry = val >= 10 ? Math.floor(val / 10) : 0;
    val = val % 10;
    res.append(val);
    head1 = head1.next;
  }

  while (head2 != null) {
    let val = carry + head2.data;
    carry = val >= 10 ? Math.floor(val / 10) : 0;
    val = val % 10;
    res.append(val);
    head2 = head2.next;
  }
  if (carry > 0) {
    res.append(carry);
  }
  res.printList();
};

/*
    This function is for when below case is there
    Suppose the digits are stored in forward order. Repeat the above problem. 
    Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. 
    Output: 9 -> 1 -> 2. That is, 912.
    To solve this we will use recursion and backtracking.
    First we will find out which linkedlist is greater and find the diff between both the lengths.
    After this prepend zeroes equal to the diff to smaller linkedList to make then equal in size.
    Then using recursion we will go to end nodes of each linkedList and while the recursion is backtracked create a new reverse linkedList with the sum of the nodes
    and finally return the head of the new reverse linkedlist.
*/
const sumForwardLists = (list1, list2) => {
  let diff = 0;
  // prepending zeroes to the smaller linkedlist
  if (list1.length > list2.length) {
    diff = list1.length - list2.length;
    addZeroPadding(list2, diff);
  } else {
    diff = list2.length - list1.length;
    addZeroPadding(list1, diff);
  }
  // from the recursive method getting the head of the new linkedList and the carry.
  let { resHead, carry } = sumRecursive(list1.head, list2.head);
  // if carry > 0 then it means we need to create one more node with this value and add it to linkedList
  if (carry > 0) {
    let newNode = new Node(carry);
    newNode.next = resHead;
    resHead = newNode;
  }
  // return head of new LinekdList
  return resHead;
};

/**
 * Using IIFE to create closures so that the global valriables that we needed can't be accessed directly from outside of this method.
 */
const sumRecursive = (() => {
  // variable to store the carry.
  let carry = 0;
  // variable to keep track of the head.
  let resHead = null;
  // return a recursive function and this function is the one which will be called when someone calls sumRecursive() function.
  return function sumRecursiveFinal(head1, head2) {
    // if head is null then return.
    if (head1 == null) {
      return;
    }
    sumRecursiveFinal(head1.next, head2.next);
    // we will reach this point only when both the linkedlists are completely iterated and backtracking starts.
    // find the total sum of both nodes and carry variable.
    let val = head1.data + head2.data + carry;
    // finding if carry will be there or not.
    carry = val >= 10 ? Math.floor(val / 10) : 0;
    // if sum>9 then we will only take the last element that's why finding modulus by 10.
    val = val % 10;
    // creating a new node with the value that we have
    let newNode = new Node(val);
    // setting next of this new Node to resHead to create a reverse linkedList
    newNode.next = resHead;
    // updating head to the new Node.
    resHead = newNode;
    // returning both reshead and carry variables
    return { resHead, carry };
  };
})();

/*
    Method to prepend zeroes in a linkedList equal to the number provided
*/
const addZeroPadding = (list, diff) => {
  while (diff > 0) {
    list.prepend(0);
    diff--;
  }
};
/**
 * Method to print the values of a linkedList
 * @param {*} head head of the list that we want to print
 */
const printLinkedlist = (head) => {
  let current = head;
  let printData = "";
  while (current != null) {
    printData += current.data + " ";
    current = current.next;
  }
  console.log("Output");
  console.log(printData);
};

let list = new LinkedList(7);
list.append(1);
list.append(6);
let list2 = new LinkedList(5);
list2.append(9);
list2.append(3);
list2.append(9);
list.printList();
list2.printList();

let head = sumListsWithoutUsingLinkedList(list.head, list2.head);
printLinkedlist(head);

sumListsUsingLinkedList(list.head, list2.head);

let list3 = new LinkedList(6);
list3.append(1);
list3.append(7);
let list4 = new LinkedList(9);
list4.append(3);
list4.append(9);
list4.append(5);
list3.printList();
list4.printList();

head = sumForwardLists(list3, list4);
printLinkedlist(head);
