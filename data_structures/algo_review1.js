//! Sorting algorithms, from basic to advanced!
let nums = [10, 5, 2, 4, 7];

// use the method sort() on the array which is a built in method of an array object:
const sortMethod = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // create a copy to avoid mutating the original array:
    const sorted = [...arr].sort((a, b) => a - b);
    return sorted;
}

// invoke the function and test the result
console.log(sortMethod(nums));

//! Bubble Sort, Binary Search, DFS, BFS and Sliding Window.
// Bubble sort is a simple comparision based algorithm, it compares the elements one by one if they are in the wrong order.
const bubbleNums = [5, 1, 4, 2, 8]

//* Algorithm of bubbleSort to sort the bubbleNums array:
const bubbleSort = (arr) => {
    //^ custom validation to make sure that the array argument passes the strict conditions:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // the numeric value of the n-length of the arr argument:
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        console.log(arr[i]);
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            // compare the adjacent elements:
            if (arr[j] > arr[j + 1]) {
                // swap if true:
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // if no swaps in this pass, array is sorted:
        if (!swapped) break;
    }
    return arr;
}

// invoke and log the function to test the bubbleSort algorithm:
console.log(bubbleSort(bubbleNums));

const binarySearchNums = [10, 2, 4, 6, 7, 11, 15, 13];
let k = 4;

const binarySearchV1 = (arr, k) => {
    // custom validation to make sure that the array argument passes a strict validation:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // create a deep copy of the array using the spread operator to make sure that original array is not mutated:
    const copyArr = [...arr].sort((a, b) => a - b);

    // need two pointers to be initialized at the begining index and the n-length - 1 of the array argument:
    //* make sure to get the right of the sorted array:
    let left = 0;
    let right = copyArr.length - 1;

    // while loop for condtional loop and init a midpoint of n-length of the array argument:
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (copyArr[mid] === k) {
            return mid; // target has been found at the mid of the array:
        } else if (copyArr[mid] < k) {
            left = mid + 1; // search the right half:
        } else {
            right = mid - 1;
        }
    }
    // if not found just return negatice -1;
    return -1;

}

// trying to find the value of k = 4 on the unsorted array, need to sort it first before proceeding!
console.log(binarySearchV1(binarySearchNums, k));

//! DFS graph traversal algorithm:
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: [],
    E: []
};

// this is a recursive DFS and one of the parameters visited initiates a set of visited for unique values only:
const DFSrecursive = (node, graph, visited = new Set(), result = []) => {
    if (visited.has(node)) return;

    // add the node to a set
    visited.add(node);
    result.push(node);

    for (let neighbor of graph[node]) {
        DFSrecursive(neighbor, graph, visited, result);
    }
    return result;
}

console.log(DFSrecursive('A', graph));
console.log(DFSrecursive('E', graph));

//* log the console for iterative version of DFS!
console.log(graph);

const DFSiterative = (start, graph) => {
    // if not in graph then return an empty array:
    if (!graph[start]) return [];

    const visited = new Set();
    const result = [];
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let i = graph[node].length - 1; i >= 0; i--) {
                console.log(i);
                stack.push(graph[node][i]);
            }
        }
    }
    return result;
}

console.log(DFSiterative('A', graph));
console.log(DFSiterative("C", graph));

//! BFS goes wide - it explores all neighbors at the current level before going deeper!

const graphBeta = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: [],
    E: []
}

// take in two argument of start,
const bfsTraversal = (start, graph) => {
    if (!graph[start]) return [];

    const visited = new Set();
    const result = [];
    const queue = [start];

    while (queue.length > 0) {
        const currentNode = queue.shift(); // dequeue from the front:

        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            result.push(currentNode);

            for (let neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    return result;
}

console.log(bfsTraversal("A", graphBeta));
console.log(bfsTraversal("B", graphBeta));
