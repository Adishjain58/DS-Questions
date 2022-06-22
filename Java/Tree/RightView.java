package Java.Tree;

import java.util.ArrayList;
import java.util.List;

import Java.Queue.Queue;

public class RightView {

    List<Integer> rightView(BinaryTreeNode root) {
        List<Integer> result = new ArrayList<>();
        Queue<BinaryTreeNode> queue = new Queue<>();
        queue.enqueue(root);
        while (!queue.isEmpty()) {
            int size = queue.length;
            for (int i = 1; i <= size; i++) {
                BinaryTreeNode peekedNode = queue.peek();
                queue.dequeue();
                if (i == size) {
                    result.add(peekedNode.val);
                }

                if (peekedNode.left != null) {
                    queue.enqueue(peekedNode.left);
                }
                if (peekedNode.right != null) {
                    queue.enqueue(peekedNode.right);
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        RightView rightView = new RightView();
        binarySearchTree.insert(7);
        binarySearchTree.insert(2);
        binarySearchTree.insert(8);
        binarySearchTree.insert(1);
        binarySearchTree.insert(5);
        List<Integer> result = rightView.rightView(binarySearchTree.root);
        for (int i : result) {
            System.out.print(i + " ");
        }
    }

}
