package Java.Tree;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BinaryTreeFromPostAndInOrder {
    static int postIndex;

    BinaryTreeNode binaryTreeFromPostAndInOrder(int[] postOrder, Map<Integer, Integer> inOrderMap, int start, int end) {
        if (start > end) {
            return null;
        }

        BinaryTreeNode root = new BinaryTreeNode(postOrder[postIndex]);
        int idx = inOrderMap.get(postOrder[postIndex]);
        postIndex--;
        root.right = binaryTreeFromPostAndInOrder(postOrder, inOrderMap, idx + 1, end);
        root.left = binaryTreeFromPostAndInOrder(postOrder, inOrderMap, start, idx - 1);
        return root;
    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        BinaryTreeFromPostAndInOrder binaryTreeFrompostAndInOrder = new BinaryTreeFromPostAndInOrder();
        int[] inOrder = { 3, 1, 4, 0, 5, 2 };
        int[] postOrder = { 3, 4, 1, 5, 2, 0 };
        Map<Integer, Integer> inOrderMap = new HashMap<>();
        for (int i = 0; i < inOrder.length; i++) {
            inOrderMap.put(inOrder[i], i);
        }
        postIndex = inOrder.length - 1;
        BinaryTreeNode root = binaryTreeFrompostAndInOrder.binaryTreeFromPostAndInOrder(postOrder, inOrderMap, 0,
                inOrder.length - 1);
        List<Integer> res = binarySearchTree.inOrder(root, new ArrayList<>());
        for (int i : res) {
            System.out.print(i + " ");
        }
        res = binarySearchTree.postOrder(root, new ArrayList<>());
        System.out.println();
        for (int i : res) {
            System.out.print(i + " ");
        }
    }
}
