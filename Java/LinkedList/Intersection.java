package Java.LinkedList;

public class Intersection {

    Node<Integer> getIntersectionNode(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        if (list1.tail != list2.tail) {
            return null;
        }

        Node<Integer> firstCurrent = list1.head;
        Node<Integer> secondCurrent = list2.head;

        while (firstCurrent != secondCurrent) {
            if (firstCurrent == null) {
                firstCurrent = list2.head;
            } else {
                firstCurrent = firstCurrent.next;
            }
            if (secondCurrent == null) {
                secondCurrent = list1.head;
            } else {
                secondCurrent = secondCurrent.next;
            }
        }
        return firstCurrent;
    }

    Node<Integer> getIntersectionNodeSecond(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        if (list1.tail != list2.tail) {
            return null;
        }

        Node<Integer> firstCurrent = list1.head;
        Node<Integer> secondCurrent = list2.head;

        if (list1.length > list2.length) {
            firstCurrent = moveNodeEqualToDiff(firstCurrent, list1.length - list2.length);
        } else {
            secondCurrent = moveNodeEqualToDiff(secondCurrent, list2.length - list1.length);
        }

        while (firstCurrent != secondCurrent) {
            firstCurrent = firstCurrent.next;
            secondCurrent = secondCurrent.next;
        }

        return firstCurrent;
    }

    Node<Integer> moveNodeEqualToDiff(Node<Integer> node, int diff) {
        while (diff > 0 && node != null) {
            node = node.next;
            diff--;
        }
        return node;
    }

    public static void main(String[] args) {
        Intersection intersection = new Intersection();
        LinkedList<Integer> list = new LinkedList<>(7);
        list.append(1);
        list.append(6);
        list.append(9);
        list.append(9);
        list.append(9);
        list.append(9);
        list.append(9);
        list.append(9);
        LinkedList<Integer> list2 = new LinkedList<>(5);
        list2.append(9);
        list2.append(3);
        list2.append(9);

        Node<Integer> newNode = new Node<>(10);
        list.tail.next = newNode;
        list.tail = newNode;
        list2.tail.next = newNode;
        list2.tail = newNode;
        newNode = new Node<>(11);
        list.tail.next = newNode;
        list.tail = newNode;
        list2.tail.next = newNode;
        list2.tail = newNode;
        list.printList();
        list2.printList();
        Node<Integer> res = intersection.getIntersectionNode(list, list2);
        System.out.println(res != null ? res.data : res);
        res = intersection.getIntersectionNodeSecond(list, list2);
        System.out.println(res != null ? res.data : res);
    }

}
