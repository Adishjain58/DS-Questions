package Java.Queue;

import Java.LinkedList.Node;

public class Queue<T> {
    Node<T> first;
    Node<T> last;
    public int length;

    public Queue() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    public void enqueue(T data) {
        Node<T> newNode = new Node<T>(data);
        if (this.first == null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    public T dequeue() {
        Node<T> NodeItem = this.first;
        if (this.length == 0) {
            System.out.println("Queue is empty");
            return null;
        } else if (this.first == this.last) {
            this.first = null;
            this.last = null;

        } else {
            this.first = this.first.next;
        }

        this.length--;
        return NodeItem.data;
    }

    public T peek() {
        if (this.length == 0) {
            System.out.println("Queue is empty");
            return null;
        }
        return this.first.data;
    }

    public boolean isEmpty() {
        return this.length == 0;
    }

}
