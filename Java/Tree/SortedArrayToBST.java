package Java.Tree;

import java.util.ArrayList;
import java.util.List;

public class SortedArrayToBST {

    BinaryTreeNode sortedArrayToBST(int[] arr, int start, int end) {
        if (start > end) {
            return null;
        }

        int mid = (start + end) >> 1;
        BinaryTreeNode root = new BinaryTreeNode(arr[mid]);
        root.left = sortedArrayToBST(arr, start, mid - 1);
        root.right = sortedArrayToBST(arr, mid + 1, end);
        return root;

    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        SortedArrayToBST sortedArrayToBST = new SortedArrayToBST();
        int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        BinaryTreeNode root = sortedArrayToBST.sortedArrayToBST(arr, 0, arr.length - 1);
        List<Integer> res = binarySearchTree.inOrder(root, new ArrayList<Integer>());
        for (int i : res) {
            System.out.print(i + " ");
        }
    }

}
