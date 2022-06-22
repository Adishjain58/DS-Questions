package Java.Tree;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BinaryTreeFromPreAndInOrder {
    static int preIndex;

    BinaryTreeNode binaryTreeFromPreAndInOrder(int[] preOrder, Map<Integer, Integer> inOrderMap, int start, int end) {
        if (start > end) {
            return null;
        }

        BinaryTreeNode root = new BinaryTreeNode(preOrder[preIndex]);
        int idx = inOrderMap.get(preOrder[preIndex]);
        preIndex++;
        root.left = binaryTreeFromPreAndInOrder(preOrder, inOrderMap, start, idx - 1);
        root.right = binaryTreeFromPreAndInOrder(preOrder, inOrderMap, idx + 1, end);
        return root;
    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        BinaryTreeFromPreAndInOrder binaryTreeFromPreAndInOrder = new BinaryTreeFromPreAndInOrder();
        int[] inOrder = { 3, 1, 4, 0, 5, 2 };
        int[] preOrder = { 0, 1, 3, 4, 2, 5 };
        Map<Integer, Integer> inOrderMap = new HashMap<>();
        for (int i = 0; i < inOrder.length; i++) {
            inOrderMap.put(inOrder[i], i);
        }
        preIndex = 0;
        BinaryTreeNode root = binaryTreeFromPreAndInOrder.binaryTreeFromPreAndInOrder(preOrder, inOrderMap, 0,
                inOrder.length - 1);
        List<Integer> res = binarySearchTree.inOrder(root, new ArrayList<>());
        for (int i : res) {
            System.out.print(i + " ");
        }
        res = binarySearchTree.preOrder(root, new ArrayList<>());
        System.out.println();
        for (int i : res) {
            System.out.print(i + " ");
        }
    }
}
