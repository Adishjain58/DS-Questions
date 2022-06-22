package Java.LinkedList;

public class LinkedList<T> {
    Node<T> head;
    Node<T> tail;
    int length;

    LinkedList(T data) {
        Node<T> newNode = new Node<>(data);
        this.head = newNode;
        this.tail = newNode;
        this.length = 0;
    }

    public void append(T data) {
        Node<T> newNode = new Node<>(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    public void prepend(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    public void deleteNode(T data) {
        Node<T> prev = null, current = this.head;
        boolean isNodePresent = true;
        while (current.data != data && current != null) {
            prev = current;
            current = current.next;
            if (current == null) {
                isNodePresent = false;
            }
        }
        if (!isNodePresent) {
            System.out.println("Node with this data is not present");
        } else {
            prev.next = current.next;
            this.length--;
        }
    }

    public boolean isListEmpty() {
        return this.length > 0 ? false : true;
    }

    public void printList() {
        Node<T> current = this.head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }

}
