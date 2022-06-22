package Java.Tree;

import java.util.List;

public class BinarySearchTree {
    public BinaryTreeNode root;

    public BinarySearchTree() {
        this.root = null;
    }

    public void insert(int val) {
        BinaryTreeNode newNode = new BinaryTreeNode(val);
        if (this.root == null) {
            this.root = newNode;
        } else {
            BinaryTreeNode currentNode = this.root;
            while (true) {
                if (val < currentNode.val) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        break;
                    }
                    currentNode = currentNode.right;
                }

            }
        }
    }

    public boolean lookup(int val) {
        if (this.root == null) {
            return false;
        }
        BinaryTreeNode currentNode = this.root;
        while (currentNode != null) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else if (val == currentNode.val) {
                return true;
            }
        }

        return false;
    }

    public boolean remove(int val) {
        if (this.root == null) {
            return false;
        }
        BinaryTreeNode currentNode = this.root;
        BinaryTreeNode parentNode = null;
        while (currentNode != null) {
            if (val > currentNode.val) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (val < currentNode.val) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else {

                if (currentNode.right == null) {
                    if (parentNode == null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.val < parentNode.val) {
                            parentNode.left = currentNode.left;
                        } else {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left == null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode == null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.val < parentNode.val) {
                            parentNode.left = currentNode.right;
                        } else {
                            parentNode.right = currentNode.right;
                        }
                    }
                } else {
                    BinaryTreeNode leftMost = currentNode.right.left;
                    BinaryTreeNode leftMostParent = currentNode.right;
                    while (leftMost.left != null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }
                    leftMostParent.left = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;
                    if (parentNode == null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.val < parentNode.val) {
                            parentNode.left = leftMost;
                        } else {
                            parentNode.right = leftMost;
                        }
                    }
                }
            }
        }
        return true;
    }

    List<Integer> inOrder(BinaryTreeNode root, List<Integer> list) {
        if (root == null) {
            return null;
        }
        inOrder(root.left, list);
        list.add(root.val);
        inOrder(root.right, list);
        return list;
    }

    List<Integer> preOrder(BinaryTreeNode root, List<Integer> list) {
        if (root == null) {
            return null;
        }
        list.add(root.val);
        preOrder(root.left, list);
        preOrder(root.right, list);
        return list;
    }

    List<Integer> postOrder(BinaryTreeNode root, List<Integer> list) {
        if (root == null) {
            return null;
        }
        postOrder(root.left, list);
        postOrder(root.right, list);
        list.add(root.val);
        return list;
    }
}
