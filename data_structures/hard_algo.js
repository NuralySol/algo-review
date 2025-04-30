//! This script contains the hardest interview questions in regards to data structures.

// PROMPT: Minimum Window Subtstring:
// given two strings, s and t, return the smallest substring of s that contains all of the characters of t, including duplicates!
// Input:  s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"

const stringAlpha = 'ADOBECODEBANC';
const target = 'ABC';

// the function takes in two arguments of strings, original string and the substring target of k:
const minWindowSubstring = (str, k) => {
    if (typeof (str) !== 'string' || str.length < k) return 'ERROR: Input a valid string!';
    if (typeof (k) !== 'string') return 'ERROR: Input a valid string!';

    // key techniques to be used in this function are two-pointers, Hasmap (need), Hashmap (window), valid counter:
    // init the default values and Map() objects to track all of the strings and sub-string counts:

    // need to count chars in k argument, and window to count chars in the current window context:
    const need = new Map();
    const window = new Map();

    //* use the loops to map the chars in K argument.
    for (let char of k) {
        // NOTE: the correct way of setting the map iteration of count with key value pair synthax:
        //^ need.get(char, (need.get(char) || 0) + 1)
        need.set(char, (need.get(char) || 0) + 1);
    }

    console.log("need target substring: ", need);

    // init the left and right pointers of the both of them at 0 value: 
    let left = 0;
    let right = 0;

    let valid = 0;
    let start = 0;
    // anything compared to Infinity will be of a less of value than Infinity as it is greater than any numeric value: 
    let minLength = Infinity;

    //* while right < str.length loop condtions:
    while (right < str.length) {
        // init and assign c variable to str[right] elements:
        let c = str[right];
        // increament right++:
        right++;
        // check the map of 'c' which contains the elements of str[right]:
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                // increament valid++;
                valid++;
            }
        }
        while (valid === need.size) {
            if (right - left < minLength) {
                start = left;
                minLength = right - left;
            }
            let d = str[left];
            left++;

            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }

    }
    // minLengh is Not an infinity because it 'has' the minLenghth value:
    if (minLength === Infinity) return "";
    console.log('minLength: ', minLength);
    // return with a slice method of the valid return based on the input argument target:
    return str.slice(start, start + minLength);

}

console.log(minWindowSubstring(stringAlpha, target));


//! Given an array of nums, return all unique triplets, [num[i], num[j], num[k]] such that they will sum to 0;
// must not contain duplicate triplets:
// Input:  nums = [-1, 0, 1, 2, -1, -4]
// return is a matrix of 2 elements at 0 and 1 index address which the values will sum to 0:
// Output: [[-1, -1, 2], [-1, 0, 1]]
const nums = [-1, 0, 1, 2, -1, -4];

const getThreeSum = (arr) => {
    // custom strict validation for an array of numbers object:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return 'Error: please input a valid array object!';

    // sort the array in place:
    arr.sort((a, b) => a - b);

    // init the empty result array [];
    const result = [];
    // minus 2 because of three sum requirement:
    for (let i = 0; i < arr.length - 2; i++) {
        console.log(i);
        console.log(arr[i]);

        if (i > 0 && arr[i] == arr[i - 1]) {
            continue; // skip duplicate fixed value:
        }

        // initalize the two pointers left and right of this contextual subarray n.length - 2 values:
        let left = i + 1;
        let right = arr.length - 1;

        // left less than right:
        while (left < right) {
            // get the sum so far:
            let sum = arr[i] + arr[left] + arr[right];

            // if sum less than 0 increament the left pointer of this context subarray:
            // if not then decreament the right pointer of this context subarray:
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                // push if none of the condtion apply meaning they are all equal to 0;
                result.push([arr[i], arr[left], arr[right]]);

                // skip duplicate values:
                while (left < right && arr[left] == arr[left + 1]) {
                    left++;
                }
                while (left < right && arr[right] == arr[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return result;
}

console.log(getThreeSum(nums));

//! 3Sum closest problem:
// Given an integer of array of numbers of length of n and an integer target, find three integers in numbers such that the sum is the closest to the target:
// return the sum of the three integers:
// numbers = [-1, 2, 1, -4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

const numbers = [-1, 2, 1, -4];
const k = 1;

const get3SumClosest = (arr, k) => {
    if (typeof (k) !== 'number') return 'Error: input a valid integer value!';
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return 'Error: input a valid array object of n-length!';
    // sort the array argument in place:
    arr.sort((a, b) => a - b);

    // assign minDiff to Infinity for comparison:
    let minDiff = Infinity;
    let closestSum = 0; // default to closest to sum:

    // subarray loop with arr.length - 2:
    for (let i = 0; i < arr.length - 2; i++) {
        console.log(i);
        console.log(arr[i]);

        // init the left and right of this subarray:
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === k) {
                return sum;
            }
            if (Math.abs(sum - k) < Math.abs(minDiff)) {
                // if true reassign to minDiff sum - k target;
                minDiff = sum - k;
                closestSum = sum;
            }
            if (sum < k) {
                left++;
            } else {
                right--;
            }
        }
    }
    // return the integer of the closestSum:
    return closestSum;
}
console.log(get3SumClosest(numbers, k));


//! Find all anagrams in the string:
const stringBeta = 'cbaebabacd';
const p = 'abc';

// Anagrams: "cba" at index 0 and "bac" at index 6;

const findAnagramSubstrings = (str, k) => {
    // strict validation of the argument strings:
    // strings have length properties even though they are immutable and they also have indices like in arrays:
    if (typeof (str) !== 'string' || str.length < k) return 'Error invalid argument string!';
    if (typeof (k) !== 'string') return 'Error invalid target string argument!';

    // create two Map objects to store the 'need' and 'window' counts:
    const need = new Map();
    const window = new Map();

    // loop the k target to map into the need target anagram finder in a string argument:
    for (let chars of k) {
        // counter and increament of char:
        need.set(chars, (need.get(chars) || 0) + 1);
    }
    // init the left and right pointers, valid and result = [] holder:
    // chain assignment:
    let left = 0, right = 0, valid = 0;
    // result holder!
    const result = [];

    // conditional while loop, for the right variable pointer:
    while (right < str.length) {
        // assign all of the character elements of the string argument in a loop while condition holds true:
        let char = str[right];
        right++;
        if (need.has(char)) {
            window.set(char, (window.get(char) || 0) + 1);
            if (window.get(char) === need.get(char)) {
                valid++;
            }
        }
        while (right - left === k.length) {
            if (valid == need.size) {
                result.push(left)
            }
            let leftChar = str[left];
            left++;
            if (need.has(leftChar)) {
                if (window.get(leftChar) === need.get(leftChar)) {
                    valid--;
                }
                window.set(leftChar, window.get(leftChar) - 1);
            }
        }
    }
    return result;
}

console.log(findAnagramSubstrings(stringBeta, p));

//! Array math Product except self:
const numsAlpha = [1, 2, 3, 4];
// Output:[24, 12, 8, 6]
// Explanation:
// output[0] = 2 * 3 * 4 = 24
// output[1] = 1 * 3 * 4 = 12

const getProductExceptSelf = (arr) => {
    // strict comparison for array of numeric values must contain more than 1 element and must be numeric array object!
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return 'Error: input a valid array object!';

    let n = arr.length;
    // create an array prototype and fill it with 1 to the length of the n-length argument property of arr:
    let output = new Array(n).fill(1);

    // build the prefix products:
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
        output[i] = prefix;
        prefix *= arr[i];
    }
    
    // build the postfix products as well:
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] = output[i] * postfix;
        postfix = postfix * arr[i]
    }
    return output;

}

console.log(getProductExceptSelf(numsAlpha))