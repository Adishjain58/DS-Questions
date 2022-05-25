package Java.LinkedList;

public class Partition {

    void partition(LinkedList<Integer> list, int val) {
        LinkedList<Integer> finalList = null;
        Node<Integer> current = list.head;
        while (current != null) {
            if (finalList == null) {
                finalList = new LinkedList<Integer>(current.data);
            } else {
                if (current.data < val) {
                    finalList.prepend(current.data);
                } else {
                    finalList.append(current.data);
                }
            }
            current = current.next;
        }
        finalList.printList();
    }

    public static void main(String[] args) {
        Partition partition = new Partition();
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
        partition.partition(list, 6);
    }

}
