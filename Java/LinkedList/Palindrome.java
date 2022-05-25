package Java.LinkedList;

public class Palindrome {
    Node<Integer> start = null;

    boolean isPalindrome(Node<Integer> head) {
        if (start == null) {
            start = head;
        }
        if (head == null) {
            return true;
        }

        boolean res = isPalindrome(head.next);
        if (!res) {
            return res;
        }
        if (start.data != head.data) {
            return false;
        }
        start = start.next;
        return true;
    }

    public static void main(String[] args) {
        Palindrome palindrome = new Palindrome();
        LinkedList<Integer> list = new LinkedList<>(1);
        list.append(2);
        list.append(3);
        list.append(1);
        System.out.println(palindrome.isPalindrome(list.head));
    }

}
