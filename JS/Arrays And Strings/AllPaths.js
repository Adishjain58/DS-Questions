/*
 Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
*/

const allPaths = (graph) => {
  // array to store final result
  let res = [];

  // temporary array to store path for each node in 0th node.
  let tempArr = [];
  // adding 0 to this array because path will always start from 0.
  tempArr.push(0);
  // calling backtrack function which is responsible for giving us the final output.
  backtrack(res, graph, tempArr, 0);
  return res;
};

const backtrack = (res, graph, tempArr, currentNode) => {
  // if currentNode is equal to length of graph -1 then it means we reached the end of graph.
  // hence make clone of tempArr and add it to the res array.
  if (currentNode == graph.length - 1) {
    res.push([...tempArr]);
    return;
  }

  // itearte through all values of array present at currentNode.
  for (let nextNode of graph[currentNode]) {
    // add element to tempArr
    tempArr.push(nextNode);
    // call recursive function by updating the currentNode value.
    backtrack(res, graph, tempArr, nextNode);
    // remove the last element from temp array because after backtracking we don't need it.
    tempArr.pop();
  }
};

let graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPaths(graph));
