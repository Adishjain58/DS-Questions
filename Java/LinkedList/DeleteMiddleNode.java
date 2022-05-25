package Java.LinkedList;

public class DeleteMiddleNode {

    Node<Integer> findMiddleNode(LinkedList<Integer> list) {
        Node<Integer> slowPointer = list.head, fastPointer = list.head;
        while (fastPointer.next != null && fastPointer.next.next != null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        return slowPointer;
    }

    boolean deleteMiddleNode(Node<Integer> node) {
        if (node == null || node.next == null) {
            return false;
        }
        Node<Integer> nextNode = node.next;
        node.data = nextNode.data;
        node.next = nextNode.next;
        return true;
    }

    public static void main(String[] args) {
        DeleteMiddleNode deleteMiddleNode = new DeleteMiddleNode();
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
        Node<Integer> node = deleteMiddleNode.findMiddleNode(list);
        deleteMiddleNode.deleteMiddleNode(node);
        list.printList();
    }

}
