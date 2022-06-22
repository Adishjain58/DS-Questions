package Java.Stack;

import java.util.EmptyStackException;

import Java.LinkedList.Node;

public class Stack<T> {
    Node<T> top;
    int length;

    Stack() {
        this.top = null;
        this.length = 0;
    }

    void push(T data) {
        Node<T> newNode = new Node<>(data);
        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    T pop() {
        if (top == null) {
            throw new EmptyStackException();
        }
        T data = this.top.data;
        this.top = this.top.next;
        this.length--;
        return data;
    }

    T peek() {
        if (top == null) {
            throw new EmptyStackException();
        }
        return this.top.data;
    }

    boolean isEmpty() {
        return this.top == null;
    }
}
