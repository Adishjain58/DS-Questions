/*
Palindrome: Implement a function to check if a linked list is a palindrome.
*/

const { LinkedList } = require("./LinkedList");

/*
    Idea here is that we will store the head of the list in a variable called start and iterate the whole linkedList recursively. And when we encounter a null return true.
    When backtracking will start, we will compare the data of start with the current node and if data is same then we will set start to next of start else return false.
    If we didn't get false anywhere during whole operation we will finally return true.
    Here also using closure so that start node can't be accessed outside of the function.
*/
const isPalindrome = (head) => {
  // variable to store head of the list.
  let start = head;
  // recursive function which will tell us if the linkedList was recursive or not.
  return function palindromeRecursive(head) {
    // if head is null then return true because if initially only we return false when no values are compared yet then the recursive function will always return false.
    if (head == null) {
      return true;
    }
    // store the result of the recursive function and pass head.next in the function.
    let res = palindromeRecursive(head.next);
    // from this point backtracking will start.
    if (!res) {
      return res;
    }
    if (start.data != head.data) {
      return false;
    }
    start = start.next;
    return true;
  };
};

let list = new LinkedList(1);
list.append(2);
list.append(2);
list.append(1);

const isPalindromeRecursive = isPalindrome(list.head);

console.log(isPalindromeRecursive(list.head));
