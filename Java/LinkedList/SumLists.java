package Java.LinkedList;

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
public class SumLists {

    void sumLists(Node<Integer> head1, Node<Integer> head2) {
        int carry = 0;
        LinkedList<Integer> resultList = null;
        while (head1 != null && head2 != null) {
            int val = carry + head1.data + head2.data;
            carry = val > 9 ? val / 10 : 0;
            val = val % 10;
            if (resultList == null) {
                resultList = new LinkedList<Integer>(val);
            } else {
                resultList.append(val);
            }
            head1 = head1.next;
            head2 = head2.next;
        }

        while (head1 != null) {
            int val = carry + head1.data;
            carry = val > 9 ? val / 10 : 0;
            val = val % 10;
            resultList.append(val);
            head1 = head1.next;
        }

        while (head2 != null) {
            int val = carry + head2.data;
            carry = val > 9 ? val / 10 : 0;
            val = val % 10;
            resultList.append(val);
            head2 = head2.next;
        }
        if (carry > 0) {
            resultList.append(carry);
        }

        resultList.printList();
    }

    // class to store the global variables that we need.
    class PartialSum {
        public int carry = 0;
        public Node<Integer> head = null;
    }

    PartialSum sumForwardList(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        int diff = 0;
        if (list1.length > list2.length) {
            diff = list1.length - list2.length;
            addZeroPadding(list2, diff);
        } else {
            diff = list2.length - list1.length;
            addZeroPadding(list1, diff);
        }

        return sumForwardListRecursive(list1.head, list2.head);
    }

    void addZeroPadding(LinkedList<Integer> list, int diff) {
        while (diff > 0) {
            list.prepend(0);
            diff--;
        }
    }

    PartialSum sumForwardListRecursive(Node<Integer> head1, Node<Integer> head2) {
        if (head1 == null) {
            return new PartialSum();
        }
        PartialSum sum = sumForwardListRecursive(head1.next, head2.next);
        int val = sum.carry + head1.data + head2.data;
        sum.carry = val > 9 ? val / 10 : 0;
        val = val % 10;
        Node<Integer> newNode = new Node<Integer>(val);
        newNode.next = sum.head;
        sum.head = newNode;
        return sum;
    }

    public void printList(Node<Integer> head) {
        Node<Integer> current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        SumLists sumLists = new SumLists();
        LinkedList<Integer> list1 = new LinkedList<>(7);
        list1.append(1);
        list1.append(6);
        LinkedList<Integer> list2 = new LinkedList<>(5);
        list2.append(9);
        list2.append(3);
        list2.append(9);
        list1.printList();
        list2.printList();
        sumLists.sumLists(list1.head, list2.head);

        LinkedList<Integer> list3 = new LinkedList<>(6);
        list3.append(1);
        list3.append(7);
        LinkedList<Integer> list4 = new LinkedList<>(9);
        list4.append(3);
        list4.append(9);
        list4.append(5);
        list3.printList();
        list4.printList();

        PartialSum sum = sumLists.sumForwardList(list3, list4);
        if (sum.carry > 0) {
            Node<Integer> newNode = new Node<Integer>(sum.carry);
            newNode.next = sum.head;
            sum.head = newNode;
        }
        sumLists.printList(sum.head);
    }

}
