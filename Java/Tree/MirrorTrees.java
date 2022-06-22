package Java.Tree;

public class MirrorTrees {

    boolean areTreesMirrorOfEachOther(BinaryTreeNode root1, BinaryTreeNode root2) {
        // if both nodes reaches null at the same time then retun true as both have same
        // depth
        if (root1 == null && root2 == null) {
            return true;
        }
        // if one of the node reaches null before other then we will return false as the
        // trees are not identical
        if (root1 == null || root2 == null) {
            return false;
        }

        // compare values of both the nodes
        // compare left of first tree with right of second tree and right of first tree
        // with left of second tree.
        // Find && of all these operations and return value
        return (root1.val == root2.val &&
                areTreesMirrorOfEachOther(root1.left, root2.right) &&
                areTreesMirrorOfEachOther(root1.right, root2.left));
    };

    public static void main(String[] args) {
        MirrorTrees mirrorTrees = new MirrorTrees();
        // creating 2 trees which are mirror of each other
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        binarySearchTree.insert(7);
        binarySearchTree.insert(2);
        binarySearchTree.insert(8);
        binarySearchTree.insert(1);
        binarySearchTree.insert(5);
        BinaryTreeNode root = new BinaryTreeNode(7);
        root.left = new BinaryTreeNode(8);
        root.right = new BinaryTreeNode(2);
        root.right.left = new BinaryTreeNode(5);
        root.right.right = new BinaryTreeNode(1);
        System.out.println(mirrorTrees.areTreesMirrorOfEachOther(binarySearchTree.root, root));
    }

}
