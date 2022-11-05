package Java.ArraysAndStrings;

import java.util.ArrayList;
import java.util.List;

public class AllPaths {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<List<Integer>> res = new ArrayList<>();

        List<Integer> tempList = new ArrayList<>();
        tempList.add(0);

        backtrack(res, graph, tempList, 0);

        return res;
    }

    void backtrack(List<List<Integer>> res, int[][] graph, List<Integer> tempList, int path) {
        if (path == graph.length - 1) {
            res.add(new ArrayList<>(tempList));
            return;
        }

        for (int node : graph[path]) {
            tempList.add(node);
            backtrack(res, graph, tempList, node);
            tempList.remove(tempList.size() - 1);
        }
    }

    public static void main(String[] args) {
        AllPaths allPaths = new AllPaths();
        int[][] graph = { { 4, 3, 1 }, { 3, 2, 4 }, { 3 }, { 4 }, {} };
        List<List<Integer>> res = allPaths.allPathsSourceTarget(graph);
        for (List<Integer> path : res) {
            for (int node : path) {
                System.out.print(node + " ");
            }
            System.out.println();
        }
    }
}
