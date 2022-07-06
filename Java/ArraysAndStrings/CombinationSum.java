package Java.ArraysAndStrings;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CombinationSum {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(candidates);
        backTrack(res, new ArrayList<Integer>(), 0, target, candidates);
        return res;
    }

    public void backTrack(List<List<Integer>> res, List<Integer> tempList, int start, int remain, int[] candidates) {
        if (remain < 0) {
            return;
        }
        if (remain == 0) {
            res.add(new ArrayList<>(tempList));
            return;
        } else {
            for (int i = start; i < candidates.length; i++) {
                tempList.add(candidates[i]);
                backTrack(res, tempList, i, remain - candidates[i], candidates);
                tempList.remove(tempList.size() - 1);
            }
        }
    }

    public static void main(String[] args) {
        CombinationSum combinationSum = new CombinationSum();
        int[] arr = { 2, 3, 6, 7 };
        int target = 20;
        List<List<Integer>> res = combinationSum.combinationSum(arr, target);
        for (List<Integer> result : res) {
            for (Integer num : result) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
