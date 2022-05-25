package Java.LinkedList;

public class KthToLastElement {

    int kthToLastElementRecursive(Node<Integer> head, int num) {
        if (head == null) {
            return 0;
        }
        int index = kthToLastElementRecursive(head.next, num) + 1;
        if (index == num) {
            System.out.println(head.data);
        }
        return index;
    }

    int kthToLastElement(LinkedList<Integer> list, int num) {
        Node<Integer> first = list.head;
        Node<Integer> second = list.head;
        while (num > 0) {
            first = first.next;
            num--;
        }
        while (first != null) {
            first = first.next;
            second = second.next;
        }
        return second.data;
    }

    public static void main(String[] args) {
        KthToLastElement kthToLastElement = new KthToLastElement();
        LinkedList<Integer> list = new LinkedList<Integer>(1);
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

        System.out.println(kthToLastElement.kthToLastElement(list, 2));
        kthToLastElement.kthToLastElementRecursive(list.head, 2);
    }

}
