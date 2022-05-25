package Java.LinkedList;

import java.util.HashMap;
import java.util.Map;

public class RemoveDuplicate {

    void removeDuplicatesWithBuffer(LinkedList<Integer> list) {
        Map<Integer, Boolean> map = new HashMap<>();
        Node<Integer> current = list.head, prev = null;
        while (current != null) {
            if (map.get(current.data) != null) {
                prev.next = current.next;
            } else {
                map.put(current.data, true);
                prev = current;
            }
            current = current.next;
        }
        list.printList();
    }

    void removeDuplicatesWithoutBuffer(LinkedList<Integer> list) {
        Node<Integer> current = list.head;
        while (current != null) {
            Node<Integer> runner = current;
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
    }

    public static void main(String[] args) {
        RemoveDuplicate removeDuplicate = new RemoveDuplicate();
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

        removeDuplicate.removeDuplicatesWithBuffer(list);
        removeDuplicate.removeDuplicatesWithoutBuffer(list);
    }

}
