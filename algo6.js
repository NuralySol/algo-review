//! Prefix Sum technique:
let nums = [2, 4, 6, 1, 3]; 

// get sum of any subarray:

const buildPrefixSum = (arr) => {
    const prefix = [0];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        prefix.push(prefix[i] + arr[i])
    }
    return prefix;
}

const rangeSum = (prefix, i, j) => {
    return prefix[j + 1] - prefix[i]
}

console.log(buildPrefixSum(nums));

const prefix = buildPrefixSum(nums)
console.log("Prefix sum: ", prefix);

// example: sum of the elements from index 1 to 3 (4 + 6 + 1) = 11;
console.log("Range sum (1 to 3): ", rangeSum(prefix, 1, 3));

//! Hash Map review (advanced):

let stringAlpha = 'Mercedes';

//* this function will return a freq of the char occurances:
const countChars = (str) => {
    const freq = new Map();
    for (let char of str) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    return freq;
}
console.log(countChars(stringAlpha));

//* this function is solving a classic problem of twoSum (classic Hash problem in interviews);

let arr = [2, 7, 11, 15]
let k = 9

// this function will return the address values (indices) where those values will equal to the K sum target which is 9 in this case:
const getTwoSum = (arr, k) => {
    // custom validation for the k argument and arr argument to make sure that they are number, and array of nums:
    if (typeof (k) !== 'number') return `Invalid input!`;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;

    const seen = new Map();

    // classic loop with index and index[value]:
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        const complement = k - arr[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i]
        }
        seen.set(arr[i], i);
    }
    return `No valid pairs found!`
}

console.log(getTwoSum(arr, k));

//! subarray sum that will equal to k target:
let arrAlpha = [1, 2, 3];
k = 3;

const subarraySum = (arr, K) => {
    if (typeof (k) !== "number") return `enter a valid number!`;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;
    
    const map = new Map();
    // this is a base case!
    map.set(0, 1);
    let count = 0;
    let sum = 0;

    for (let num of arr) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count;

}

console.log(subarraySum(arrAlpha, k))

//! Longest subArray with K sum target:
nums = [1, 2, 1, 0, 1, 1, 0];
k = 4;

const getSubarrayToSum = (arr, k) => {
    // custom validation for the k target and arr argument arr:
    if (typeof (k) !== 'number') return `please input a valid number`;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;

    // create an emtpy map object to hold the "count":
    const map = new Map();
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sum += arr[i];

        if (sum === k) {
            // entire subarray from 0 to i is valid:
            maxLen = i + 1 
        }
        if (map.has(sum - k)) {
            let length = i - map.get(sum - k);
            maxLen = Math.max(maxLen, length);
        } 

        if (!map.has(sum)) {
            map.set(sum, i)
        }
    }
    return maxLen;
}

console.log(getSubarrayToSum(nums, k))

//! Monotonic stack:
// Next Greater Element!
const arrBeta = [2, 1, 2, 4, 3]

const nextGreater = (nums) => {

    // array prototype to fill in up the n-length of the array:
    const res = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(nums[i]);
        while (stack.length && stack.at(-1) <= nums[i]) {
            stack.pop()
        }
        if (stack.length) {
            res[i] = stack.at(-1);
        }
        stack.push(nums[i]);
    }
    return res;

}

console.log(nextGreater(arrBeta));

// Start from right:

// i=4 → 3 → stack: [] → result: -1 → push 3
// i=3 → 4 → stack: [3] → pop 3 → result: -1 → push 4
// i=2 → 2 → stack: [4] → 4 > 2 → result: 4 → push 2
// i=1 → 1 → stack: [4, 2] → 2 > 1 → result: 2 → push 1
// i=0 → 2 → stack: [4, 2, 1] → pop 1, 2 == 2 pop again → 4 > 2 → result: 4 → push 2

//! Monotonic stack:
// next smaller element:

const arrayGamma = [2, 1, 2, 4, 3];

const nextSmaller = (nums) => {
    const res = new Array(nums.length).fill(-1);
    const stack = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(nums[i]);
        while (stack.length && stack.at(-1) >= nums[i]) {
            stack.pop();
        }
        if (stack.length) {
            res[i] = stack.at(-1);
        }
        stack.push(nums[i]);
    }
    return res;
}
console.log(nextSmaller(arrayGamma))

// Start from right:

// i=4 → 3 → stack: [] → result: -1 → push 3
// i=3 → 4 → stack: [3] → 3 < 4 → result: 3 → push 4
// i=2 → 2 → stack: [3, 4] → pop 4, pop 3 → result: -1 → push 2
// i=1 → 1 → stack: [2] → pop 2 → result: -1 → push 1
// i=0 → 2 → stack: [1] → 1 < 2 → result: 1 → push 2