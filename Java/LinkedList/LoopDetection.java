package Java.LinkedList;

public class LoopDetection {

    Node<Integer> loopDetection(Node<Integer> head) {
        Node<Integer> slowPointer = head;
        Node<Integer> fastPointer = head;
        while (fastPointer != null && fastPointer.next != null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
            if (slowPointer == fastPointer) {
                break;
            }
        }
        if (fastPointer == null || fastPointer.next == null) {
            return null;
        }

        slowPointer = head;
        while (slowPointer != fastPointer) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next;
        }

        return fastPointer;
    }

    public static void main(String[] args) {
        LoopDetection loopDetection = new LoopDetection();
        LinkedList<Integer> list = new LinkedList<>(7);
        list.append(1);
        list.append(6);
        Node<Integer> newNode = new Node<>(8);
        list.tail.next = newNode;
        list.tail = newNode;
        list.append(9);
        list.append(2);
        list.append(5);
        list.append(6);
        list.append(8);
        list.append(9);
        list.tail.next = newNode;

        Node<Integer> res = loopDetection.loopDetection(list.head);
        System.out.println(res != null ? res.data : res);
    }

}
