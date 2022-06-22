package Java.Tree;

public class IdenticalTrees {

    boolean areTreesIdentical(BinaryTreeNode root1, BinaryTreeNode root2) {
        if (root1 == null && root2 == null) {
            return true;
        }

        if (root1 == null || root2 == null) {
            return false;
        }

        return root1.val == root2.val && areTreesIdentical(root1.left, root2.left)
                && areTreesIdentical(root1.right, root2.right);
    }

    public static void main(String[] args) {
        IdenticalTrees identicalTrees = new IdenticalTrees();
        // creating 2 identical trees
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        binarySearchTree.insert(7);
        binarySearchTree.insert(2);
        binarySearchTree.insert(8);
        binarySearchTree.insert(1);
        binarySearchTree.insert(5);
        BinarySearchTree binarySearchTree2 = new BinarySearchTree();
        binarySearchTree2.insert(7);
        binarySearchTree2.insert(2);
        binarySearchTree2.insert(8);
        binarySearchTree2.insert(1);
        binarySearchTree2.insert(5);
        System.out.println(identicalTrees.areTreesIdentical(binarySearchTree.root, binarySearchTree2.root));
    }

}
