package Java.Tree;

public class BinaryTreeToDoublyLinkedList {

    BinaryTreeNode prev = null, head = null, head2 = null;

    void btToDLL(BinaryTreeNode root) {
        if (root == null) {
            return;
        }

        btToDLL(root.left);
        // if prev is null that means we still don't have head for our linkedlist
        if (prev == null) {
            // set the root to head
            head = root;
        }
        // otherwise it will be same like when we reverse a linkedList, prev will have
        // the previous node and root will have current node.
        // in a doubly linkedlist we have pointers between both the nodes. So, we will
        // set right of prev to root and left of root to prev,
        // after this set prev to root to set current root as prev node.
        else {
            root.left = prev;
            prev.right = root;
        }
        prev = root;
        btToDLL(root.right);
    };

    // in case of inverse inOrder only links will be reversed else everything will
    // remain same
    void btToDLLInverseInorder(BinaryTreeNode root) {
        if (root == null) {
            return;
        }

        btToDLLInverseInorder(root.right);
        if (prev == null) {
            head = root;
        } else {
            root.right = prev;
            prev.left = root;
        }
        prev = root;
        btToDLLInverseInorder(root.left);
    };

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        BinaryTreeToDoublyLinkedList binaryTreeToDoublyLinkedList = new BinaryTreeToDoublyLinkedList();
        binarySearchTree.insert(7);
        binarySearchTree.insert(2);
        binarySearchTree.insert(8);
        binarySearchTree.insert(1);
        binarySearchTree.insert(5);

        // binaryTreeToDoublyLinkedList.btToDLL(binarySearchTree.root);
        // while (binaryTreeToDoublyLinkedList.head != null) {
        // System.out.print(binaryTreeToDoublyLinkedList.head.val + " ");
        // binaryTreeToDoublyLinkedList.head = binaryTreeToDoublyLinkedList.head.right;
        // }
        binaryTreeToDoublyLinkedList.btToDLLInverseInorder(binarySearchTree.root);
        while (binaryTreeToDoublyLinkedList.head != null) {
            System.out.print(binaryTreeToDoublyLinkedList.head.val + " ");
            binaryTreeToDoublyLinkedList.head = binaryTreeToDoublyLinkedList.head.left;
        }
    }
}
