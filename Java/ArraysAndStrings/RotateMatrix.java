package Java.ArraysAndStrings;

public class RotateMatrix {

    int[][] rotateMatrixWithExtraSpace(int arr[][]) {
        int len = arr.length;
        int res[][] = new int[len][len];
        for (int i = 0; i < len; i++) {
            int index = 0;
            for (int j = len - 1; j >= 0; j--) {
                res[i][index++] = arr[j][i];
            }
        }

        return res;
    }

    int[][] rotateMatrixInPlace(int arr[][]) {

        arr = transpose(arr);
        arr = inverse(arr);

        return arr;
    }

    int[][] transpose(int arr[][]) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j < arr.length; j++) {
                if (i != j) {
                    int temp = arr[i][j];
                    arr[i][j] = arr[j][i];
                    arr[j][i] = temp;
                }
            }
        }
        return arr;
    }

    int[][] inverse(int arr[][]) {

        for (int i = 0; i < arr.length; i++) {
            int index = arr.length - 1;
            for (int j = 0; j < arr[i].length / 2; j++) {
                int temp = arr[i][j];
                arr[i][j] = arr[i][index];
                arr[i][index] = temp;
                index--;
            }
        }
        return arr;
    }

    void printMatrix(int arr[][]) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        RotateMatrix rotateMatrix = new RotateMatrix();
        int arr[][] = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 }, { 13, 14, 15, 16 } };
        int res[][] = rotateMatrix.rotateMatrixWithExtraSpace(arr);
        rotateMatrix.printMatrix(res);
        res = rotateMatrix.rotateMatrixInPlace(arr);
        rotateMatrix.printMatrix(res);
    }
}
