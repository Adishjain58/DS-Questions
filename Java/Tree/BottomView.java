package Java.Tree;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import Java.Queue.Queue;

public class BottomView {

    class Pair {
        BinaryTreeNode node;
        int assignedValue;

        Pair(BinaryTreeNode node, int value) {
            this.node = node;
            this.assignedValue = value;
        }
    }

    List<Integer> bottomView(BinaryTreeNode root) {
        List<Integer> result = new ArrayList<>();
        Map<Integer, Integer> map = new HashMap<>();
        Queue<Pair> queue = new Queue<>();
        queue.enqueue(new Pair(root, 0));
        while (!queue.isEmpty()) {
            Pair peekedNode = queue.peek();
            queue.dequeue();
            map.put(peekedNode.assignedValue, peekedNode.node.val);

            if (peekedNode.node.left != null) {
                queue.enqueue(new Pair(peekedNode.node.left, peekedNode.assignedValue - 1));
            }
            if (peekedNode.node.right != null) {
                queue.enqueue(new Pair(peekedNode.node.right, peekedNode.assignedValue + 1));
            }
        }
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            result.add(entry.getValue());
        }
        Collections.sort(result);
        return result;
    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        BottomView bottomView = new BottomView();
        binarySearchTree.insert(7);
        binarySearchTree.insert(2);
        binarySearchTree.insert(8);
        binarySearchTree.insert(1);
        binarySearchTree.insert(5);
        List<Integer> result = bottomView.bottomView(binarySearchTree.root);
        for (int i : result) {
            System.out.print(i + " ");
        }
    }
}
