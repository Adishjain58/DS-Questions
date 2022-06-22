package Java.Tree;

public class MaximumDepth {

    int maximumDepth(BinaryTreeNode root) {
        if (root == null) {
            return 0;
        }

        int leftVal = maximumDepth(root.left);
        int rightVal = maximumDepth(root.right);
        return Math.max(leftVal, rightVal) + 1;
    }

    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        MaximumDepth maximumDepth = new MaximumDepth();
        binarySearchTree.insert(7);
        binarySearchTree.insert(2);
        binarySearchTree.insert(8);
        binarySearchTree.insert(1);
        binarySearchTree.insert(5);
        binarySearchTree.insert(6);
        System.out.println(maximumDepth.maximumDepth(binarySearchTree.root));
    }

}
