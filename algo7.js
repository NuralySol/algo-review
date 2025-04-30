//* Recursion and backtracking as a concept:

// classic backtracking, a recursive function call:
const arrayNums = [1, 2];

const getSubSets = (arr) => {
    // custom validation for the array:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;
    // need an empty array of object to hold the values to be pushed of the result:
    const result = [];
    // function defined inside the function that will be called in the upper function!
    function backtrack (start, path) {
        result.push([...path]) // this will destruct and save the current subset to result array object:

        // need a loop to the n-length of the array to grab all of the values:
        for (let i = start; i < arr.length; i++){
            path.push(arr[i]);      // choose
            backtrack(i + 1, path)  // explore
            path.pop()              // un-choose(backtrack);
        }
    }
    backtrack(0, []);
    return result;
}

console.log(getSubSets(arrayNums))

// classic factorial!
const factorial = (n) => {
    // validation to make sure that the argument passed is not a zero:
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
// 120 is the answer:
console.log(factorial(5))

// backtracking:
const subsets = (nums) => {
    const result = [];

    function backtrack(start = 0, path = []) {
        result.push([...path]) // adds current path (a subset)

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]) // choose
            backtrack(i + 1, path) // explore
            path.pop() // un-choose (backtrack)
        }
    }
    backtrack()
    return result;
}

console.log(subsets([1, 2, 3]));

// factorial of any n number:

const factorialV1 = (n) => {
    if (typeof (n) !== 'number') return n;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        // increament the result up n element with the loop *=;
        result *= i;
    }
    return result;

}

console.log(factorialV1(5));

// fibo using dynamic programming!
const fibonacci = (n) => {
    if (typeof (n) !== "number") return n;
    const fibo = [0, 1];
    // F(n) = F(n-1) + F(n-2) is the fibo formula:

    for (let i = 2; i <= n; i++) {
        console.log(i);
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibonacci(7));

// no array:
const fiboOptimized = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

console.log(fiboOptimized(7))

// return all possible permutations:
let nums = [1, 2, 3];

const getPermutations = (arr) => {
    // custom validation for the array using 3 seperate validation types:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;

    // this will hold the result:
    const result = [];
    // TODO: function to backtrack!
    const backtrack = (path = [], used = new Array(arr.length).fill(false)) => {
        if (path.length === arr.length) {
            result.push([...path]) // save a full permutation
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue; // skip used numbers:

            used[i] = true; // mark the number as used:
            path.push(arr[i]); // choose
            backtrack(path, used); // explore
            path.pop();     // Un-choose (backtrack)
            used[i] = false; // reset
        }
    };
    backtrack();
    return result;

}

console.log(getPermutations(nums));

