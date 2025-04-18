//! Sliding window technique is good for subarrays and substrings:

//* use the let for now for reasignments later for different examples:
let nums = [2, 1, 5, 1, 3, 2];
let k = 3;

// find the maxSum of subarray of size k:
const getSumSubArrayK = (arr, k) => {
    // custom validation of the array and k:
    if (typeof (k) !== "number") return k;
    if (!Array.isArray(arr) || arr.length < k || !arr.every(item => typeof item === 'number')) {
        return `you [${arr}] is not valid!`
    };
    // init the maxSum and windowSize to be 0 for tracking the maxSum and windowSize dynamically:
    let windowSum = 0;
    let maxSum = 0;

    // build the initial window using the loop up to k condition:
    for (let i = 0; i < k; i++){
        // assign the values of arr[i] up to k lenght to get the first windosize:
        windowSum += arr[i];
    }
    // assign the maxSum to windowSum at the moment up to k:
    maxSum = windowSum;
    console.log("curent windowSum, maxSum: ", windowSum, maxSum);
    
    // slide the window
    for (let i = k; i < arr.length; i++) {
        // slide to the right using [] notation to get to array values:
        windowSum += arr[i] - arr[i - k];
        // reassign a new maxSum using the Math () object: to compare and only get the max single value of the comparison:
        maxSum = Math.max(maxSum, windowSum);
    }
    // return the maxSum of the two windows of subarrays:
    return maxSum;
}

// log "invoke" the function and pass-in the argument of nums (arr), k (k) -> to the parameters of the function:
console.log(getSumSubArrayK(nums, k))

//! longest substring without repeating characters:

let stringA = 'abcabcbb';
// expected output is abc since it is the longest substring without repeats:
// strings do indeed have some of the array properties such as length etc. or index, but not all:

const getLongestSubString = (str) => {
    if (typeof (str) !== 'string' || str.length <= 1) return str;
    // set will only take in the ubique values:
    const set = new Set();

    // need the left at 0, and the maxLen at 0;
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right])
        maxLen = Math.max(maxLen, right - left + 1);
    }
    console.log(maxLen);
    return maxLen;
}

console.log(getLongestSubString(stringA))

//* this function to get the actual string values of the longest repeating subtstring:
const getLongestSubStringWithChars = (str) => {
    if (typeof (str) !== 'string' || str.length < 1) return str;

    const set = new Set();
    let left = 0;
    let maxLen = 0;
    let startIdx = 0;

    for (let right = 0; right < str.length; right++) {
        console.log(right);
        console.log(str[right]);

        while (set.has(str[right])) {
            set.delete(str[left])
            left++;
        }

        set.add(str[right])
        
        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1;
            startIdx = left;
        }
    }
    return str.slice(startIdx, startIdx + maxLen);
}

console.log(getLongestSubStringWithChars(stringA));

//! get the longest Substring with at Most two distinct characters:

const stringB = 'eceba';
// expected output "ece" is the longest substring with at most two distinct characters:

const getLongestSubStringWith2Uniques = (str) => {

    if (typeof (str) !== 'string' || str.length === 0) return 0;

    const map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < str.length; right++) {
        const rightChar = str[right];
        // add an increament to right chacater:
        map.set(rightChar, (map.get(rightChar) || 0) + 1);

        // shrink the window if there are more than 2 distinct characters:
        while (map.size > 2) {
            const leftChar = str[left];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) {
                map.delete(leftChar)
            }
            left++;
        }
        // update the maxLen
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen;
}   

console.log(getLongestSubStringWith2Uniques(stringB));

//^ Lesson review of prefix and suffix:
const arr = [2, 3, 1, 4];

const calcPrefixSum = (arr) => {
    const result = [];
    let prefixSum = 0;
    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];
        result.push(prefixSum)
    }
    return  Math.max(...result)
}

console.log(calcPrefixSum(arr));

//! return the min length of a contigious subarray of which the sum is greater than or equal to target:
// reassign the new values to an array and nums:
nums = [2, 3, 1, 2, 4, 3];
target = 7;

const contigiousSubArrayToSum = (arr, k) => {
    if (typeof (k) !== "number") return k;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;
    
    // need to init the pointer for sliding window technique:
    let left = 0;
    let sum = 0;
    // minLen is set to infinity:
    let minLen = Infinity;

    // loop using the right pointer of the array:
    for (let right = 0; right < arr.length; right++) {
        console.log(right);
        console.log(arr[right]);

        // expand the right window:
        sum += arr[right];
        while (sum >= k) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= arr[left];
            left++;
        }

    }
    // if minLen will equal to infinity which is false just return 0 else return the minLen value:
    if (minLen === Infinity) {
        return 0;
    } else {
        return minLen;
    }
}

console.log(contigiousSubArrayToSum(nums, target))

