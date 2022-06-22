package Java.Tree;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import Java.Queue.Queue;

public class TopView {

    class Pair {
        BinaryTreeNode node;
        int assignedValue;

        Pair(BinaryTreeNode node, int value) {
            this.node = node;
            this.assignedValue = value;
        }
    }

    List<Integer> topView(BinaryTreeNode root) {
        List<Integer> result = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        Queue<Pair> queue = new Queue<>();
        queue.enqueue(new Pair(root, 0));
        while (!queue.isEmpty()) {
            Pair peekedNode = queue.peek();
            queue.dequeue();
            if (!set.contains(peekedNode.assignedValue)) {
                result.add(peekedNode.node.val);
                set.add(peekedNode.assignedValue);
            }

            if (peekedNode.node.left != null) {
                queue.enqueue(new Pair(peekedNode.node.left, peekedNode.assignedValue - 1));
            }
            if (peekedNode.node.right != null) {
                queue.enqueue(new Pair(peekedNode.node.right, peekedNode.assignedValue + 1));
            }
        }

        Collections.sort(result);
        return result;
    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        TopView topView = new TopView();
        binarySearchTree.insert(7);
        binarySearchTree.insert(2);
        binarySearchTree.insert(8);
        binarySearchTree.insert(1);
        binarySearchTree.insert(5);
        List<Integer> result = topView.topView(binarySearchTree.root);
        for (int i : result) {
            System.out.print(i + " ");
        }
    }
}
