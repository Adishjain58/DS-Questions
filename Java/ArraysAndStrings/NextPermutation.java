package Java.ArraysAndStrings;

public class NextPermutation {

    int[] nextPermutation(int arr[]) {
        // variable to store the index of number who is smaller to it's previous numbers
        // when iterating through end of the array.
        int index = -1;
        for (int i = arr.length - 1; i > 0; i--) {
            // if element at i-1 is less than element at i then store i-1 value in index
            // variable and break the loop. This element is the one that we need to replace
            // to create
            // next permutation in lexographical order.
            if (arr[i - 1] < arr[i]) {
                index = i - 1;
                break;
            }
        }
        // if the element index >=0 then only we need to swap the elements
        if (index >= 0) {
            int end = arr.length - 1;
            // run loop until we find an element which is greater than the element present
            // at index which is stored in index variable.
            while (end > 0 && arr[end] <= arr[index]) {
                end--;
            }
            // once element is found replace both of those elements.
            swap(arr, index, end);
        }

        // finally reverse all the elements which came after the found index.
        reverse(arr, index + 1);

        return arr;
    }

    private void reverse(int[] arr, int index) {
        int end = arr.length - 1;
        while (index < end) {
            swap(arr, index, end);
            index++;
            end--;
        }
    }

    private void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {
        NextPermutation nextPermutation = new NextPermutation();
        int arr[] = { 1, 5, 8, 4, 7, 6, 5, 3, 1 };
        int[] res = nextPermutation.nextPermutation(arr);
        for (int num : res) {
            System.out.print(num + " ");
        }
    }

}
