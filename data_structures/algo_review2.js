//! Two-pointers and sliding window [two-pointers-cover.png] 

const nums = [1, 2, 3, 4, 5];

//* reverse an array using the Two Pointer technqiue:
const reverseArray = (arr) => {
    // custom validation for the array argument:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;
    
    // init the left and right pointers of the n-length array at index values:
    let left = 0;
    let right = arr.length - 1;

    // loop using while until the conditions have been met:
    while (left < right) {
        // swap the array left with arr right:
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // increament left++ by 1, and decreament right-- by 1, in essence move the pointers one by one with swaping them in place:
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray(nums));

//* check to see if the array is palindrome:
// check to see if the array reads backwards and forwards the same, the below arr1 is a palindrome!
const arr1 = [1, 2, 3, 2, 1];

const isArrPalindrome = (arr) => {
    // custom validation of the array:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // init the two pointers at n-length indices:
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        // increament left++, and decreament right -- by 1:
        left++;
        right--;
    }
    // if all matched it is a palindrome:
    return true;
}

console.log(isArrPalindrome(arr1));

//* two Sum to target k in a sorted array:
const arr2 = [2, 5, 8, 10];
const k = 7;

const getTwoSum = (arr, k) => {
    // custom validation for k - target, arr - argument:
    if (typeof (k) !== 'number') return k;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // two pointers (at index values)
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === k) {
            return [arr[left], arr[right]];
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    // other if no pair found to sum k target return null then:
    return null;
}

console.log(getTwoSum(arr2, k));

//* if the array is unsorted:
const arr3 = [1, 3, 8, 2, 5];
let k1 = 9;

const getTwoSumUnsorted = (arr, k, fn) => {
    if (typeof (k) !== 'number') return k;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    let sortedArr = [...arr].sort((a, b) => a - b);
    //! NOTE: passing an argument it is a function declared as getTwoSum once the array is sorted just reuse the function of getTwoSum for this k - target context!
    // return the fn argument of getTwosum with this context k, 
    // callback function:
    return fn(sortedArr, k);
}

console.log(getTwoSumUnsorted(arr3, 9, getTwoSum))

//* remove the duplicates from a sorted Array - in Place operation:
const arr4 = [1, 2, 3, 4, 4];

const removeDuplicates = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // declare i at 0 to denote the address index of the arr argument:
    // in this i and j are the pointers of the array!
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(removeDuplicates(arr4));

//* move the zeroes to the end, while maintaining the order of non-zero elements!
const arr5 = [1, 0, 2, 0, 3, 5];

const moveZeroes = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;
    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            // swap in place, anything that is not equal to 0:
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    return arr;
}   

console.log(moveZeroes(arr5));

//! Sliding window technique to slide the "window" of the array argument:
const arr6 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let k2 = 4;

// expceted outpute of the above array of the sub-array which will sum to the greatest sum is 39 with elements [4, 2, 10, 23]

const maxSumOfSubarray = (arr, k) => {
    // custom validation for k - target, arr argument: (strict validation)
    if (typeof (k) !== 'number') return k;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number' )) return arr;

    // Step1: calculate the sum of the first window size of k which:
    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        console.log(arr[i]);
        windowSum += arr[i];
    }
    console.log(windowSum);
    // reasign maxSum so far:
    maxSum = windowSum;

    // Step 2: Slide the window:
    for (let i = k; i < arr.length; i++) {
        console.log(arr[i]);
        // add the next element, remove the first element of the previous window:
        windowSum = windowSum + arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumOfSubarray(arr6, k2))

//! Minimum size subarray sum:
const arr7 = [2, 3, 1, 2, 4, 3];
const k3 = 7;

// Given an array of positive integers arr and a positive integer target, find the minimal length of a contiguous subarray of which the sum is greater than or equal to target. If no such subarray exists, return 0.

const minSubArray = (arr, k) => {
    // custom validation of k-argument and arr-argument (Strict validation):
    if (typeof (k) !== 'number') return k;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    let left = 0;
    let currentSum = 0;
    let minLength = Infinity;

    // loop with the "right":
    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        while (currentSum >= k) {
            // update the minLenth with min of the Math object:
            minLength = Math.min(minLength, right - left + 1);
            currentSum -= arr[left];
            left++;
        }
    }

    if (minLength === Infinity) {
        return 0;
    } else {
        return minLength;
    }
}

console.log(minSubArray(arr7, k3));

//! Longest substring without repeating chars:
const string = "pwwkew";
    
// TODO: do this function! which will require Set object for unique char storage!
const longestUniqueSubstring = (str) => {
    if (typeof (str) !== 'string') return 'input a valid string!';
    // init the left index at 0, and the maxLength at 0 so far:
    let left = 0;
    let maxLength = 0;

    // init an emtpy set to hold unique values only:
    let set = new Set ()
    for (right = 0; right < str.length; right++) {
        console.log(right);
        console.log(str[right]);
        while (set.has(str[right])) {
            set.delete(str[left])
            left++;
        } set.add(str[right])
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

console.log(longestUniqueSubstring(string))

const longestUniqueSubstringValue = (str) => {
    if (typeof (str) !== 'string') return str;
    // init all of the required steps for the sliding window technique:
    let left = 0;
    let maxLength = 0;
    let start = 0;
    let set = new Set()

    // loop from the 'right' side of the sliding window starting at index 0;
    for (let right = 0; right < str.length; right++){
        console.log(right);
        console.log(str[right]);
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right])

        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            start = left; // record the start of the new max window:
        }
    }
    // use the slice operator to slice the string in return of this function:
    return str.slice(start, start + maxLength);
}

console.log(longestUniqueSubstringValue("pwwkew"));


//! intermediate problems of the sliding window technique:

const stringAlpha = 'eceba';
const k4 = 2;
// expeceted output is 'ece' , Given a string s and an integer k, return the length of the longest substring that contains at most k distinct characters.

const getLongestSubstringUniqueChars = (str, k) => {
    // custom validation:
    if (typeof (str) !== 'string') return str;
    if (k == 0) return 0;

    // map to see the frequency of characters apearing in a string argument:
    const map = new Map();
    let left = 0;
    let maxLength = 0;

    for (right = 0; right < str.length; right++) {
        // init a char variable and store the looped string of str.length to it:
        const char = str[right];
        map.set(char, (map.get(char) || 0) + 1) // add or update the char count:

        // shrink the window if too many ditinct chars in the map:
        while (map.size > k) {
            // init the left char var:
            const leftChar = str[left];
            map.set(leftChar, map.get(leftChar) - 1)

            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++;
        }
        // update the maxLength so far:
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

console.log(getLongestSubstringUniqueChars(stringAlpha, k4));

