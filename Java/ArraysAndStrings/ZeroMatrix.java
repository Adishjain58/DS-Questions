package Java.ArraysAndStrings;

public class ZeroMatrix {

    int[][] zeroMatrix(int[][] arr) {
        boolean isRowContainsZero = false;
        boolean isColumnContainsZero = false;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i][0] == 0) {
                isColumnContainsZero = true;
                break;
            }
        }

        for (int i = 0; i < arr[0].length; i++) {
            if (arr[0][i] == 0) {
                isRowContainsZero = true;
                break;
            }
        }

        for (int i = 1; i < arr.length; i++) {
            for (int j = 1; j < arr[i].length; j++) {
                if (arr[i][j] == 0) {
                    arr[i][0] = 0;
                    arr[0][j] = 0;
                }
            }
        }

        for (int i = 1; i < arr.length; i++) {
            if (arr[i][0] == 0) {
                arr = setRowZero(arr, i);
            }
        }

        for (int i = 1; i < arr[0].length; i++) {
            if (arr[0][i] == 0) {
                arr = setColumnZero(arr, i);
            }
        }

        if (isColumnContainsZero) {
            arr = setRowZero(arr, 0);
        }

        if (isRowContainsZero) {
            arr = setColumnZero(arr, 0);
        }

        return arr;
    }

    int[][] setRowZero(int[][] arr, int row) {
        for (int i = 0; i < arr[row].length; i++) {
            arr[row][i] = 0;
        }
        return arr;
    }

    int[][] setColumnZero(int[][] arr, int column) {
        for (int i = 0; i < arr.length; i++) {
            arr[i][column] = 0;
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
        ZeroMatrix zeroMatrix = new ZeroMatrix();
        int arr[][] = { { 1, 2, 3, 4 }, { 1, 0, 3, 4 }, { 2, 5, 0, 7 }, { 4, 5, 6, 7 } };
        int res[][] = zeroMatrix.zeroMatrix(arr);
        zeroMatrix.printMatrix(res);
    }

}
