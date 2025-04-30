// Two pointers is a technique in which you use two variables to scan through the data structure (array or a string)
//! Two Pointer technique image reference [two-pointers-cover.png]

//* reverse an array in place using the two pointers:
const arrayAlpha = [1, 2, 3, 4, 5];

const reverseInPlace = (arr) => {
    // custom validation for numeric array object: (strict filter)
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // init the left and right pointers and compare them to against each other: (index values)
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // now move the pointers:
        left++;
        right--;
    }
    return arr;
}

console.log(reverseInPlace(arrayAlpha));

//* check if a string is a palindrome:
const stringAlpha = 'racecar';

const isStringPalindrome = (str) => {
    // validation (strict):
    if (typeof (str) !== 'string' || str.length <= 1) return `ERROR: invalid string argument!`
    
    // init the two pointers for the two pointer technique: (first and last index address),
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        // if they are not equal in each movement then return false: otherwise they are all the same thus a palindrome!
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isStringPalindrome(stringAlpha));

//* get the indices of two Sum in a sorted array using the two-pointers (can also be done with map and complement)!
const arrayBeta = [2, 7, 11, 15];
const target = 9;

const getTwoSumTarget = (arr, k) => {
    // strict validation of the array arguments:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return 'ERROR: invalid array argument object';
    if (typeof (k) !== 'number') return 'ERROR: invalid integer argument!';
    
    // init the left and right pointer of the n-length of the array:
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === k) {
            return [arr[left], arr[right]]
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(getTwoSumTarget(arrayBeta, target));

//* remove duplicates from the sorted array (In place operation);
const arrayGamma = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicatesInPlace = (arr) => {
    // custom strict validation for the numeric array argument:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return 'ERROR: invalid array argument object!';

    //NOTE: this solution will require the left pointer at i and the right pointer at j, for simplicity let us call the left and right!
    let left = 0;

    // start from 1 since we are already tracking 0 with left for uniques:
    for (let right = 1; right < arr.length; right++) {
        console.log(arr[right]);
        if (arr[right] !== arr[left]) {
            left += 1;
            arr[left] = arr[right];
        }
    }
    return left + 1;
}

console.log(removeDuplicatesInPlace(arrayGamma));

//* move all of the 0 elements to end while keeping the relative order of the non-zero elements:
const arrayTheta = [0, 1, 0, 3, 12];

const moveZeroesOfArray = (arr) => {
    // strict custom validation of the numeric array argument:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    // init the left = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] !== 0) {
            // make sure the increamenter is within the scope of the boolean logic for it to "walk":
            [arr[left], arr[right]] = [arr[right], arr[left]] 
            left++;
        }
    }
    return arr;
}

console.log(moveZeroesOfArray(arrayTheta));

//* squares of the sorted array:
const nums = [-4, -1, 0, 3, 10];

// expected output: [0, 1, 9, 16, 100]
// it is unsorted and negatives squared will give a positive integer:
const createSquaredArray = (arr) => {
    // custom strict validation of the array argument:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;
    // for this we do not need the sort method since the left will be biggest -number and right biggest +number:
    // init the two pointers of the address values of the array argument left and right: create a holder prototype array of n-length
    let result = Array(arr.length)
    let left = 0;
    let right = arr.length - 1;

    // get the position as well:
    let position = arr.length - 1;

    while (left <= right) {
        // get the absolute values of each iteration!
        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            result[position] = arr[left] * arr[left];
            left++;
        } else {
            result[position] = arr[right] * arr[right];
            right--; 
        }
        position--;
    }
    return result;
}

console.log(createSquaredArray(nums))

//* get the longest substring without repeating characters:
// TODO: add a substring return as well, as the number of subtring argument!

const stringDelta = "pwwkew";
// expected output is 'wke', with the length of 3:

const getLongestSubStringNoReapeats = (str) => {
    // strict validation of the argument string:
    if (typeof (str) !== 'string' || str.length <= 1) return 'ERROR: invalid string argument provided!';

    // use the set() global object to 'see' the unique characters as set only accepts unique elements: NO-repeats!
    const seenChars = new Set()

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        console.log(right);
        console.log(str[right]);

        while (seenChars.has(str[right])) {
            seenChars.delete(str[left])
            left++;
        }
        seenChars.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(getLongestSubStringNoReapeats(stringDelta));

//^ Incorporating the sliding window technqiue + with two pointer technqiue for this intermediate problem:
const stringTheta = 'eceba';
const k1 = 2;

// e and c, are distinct chars: expected output 3!

const getLongestSubWithDistinct = (str, k) => {
    // custom validation for string and number argument:
    if (typeof (str) !== 'string' || str.length <= 1) return 'ERROR: invalid array argument provided!';
    if (typeof (k) !== 'number' || str.length < k) return 'ERROR: invalid integered provided ';

    const map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        // init a char var for easier tracking:
        const char = str[right];
        map.set(char, (map.get(char) || 0) + 1)

        while (map.size > k) {
            // init a leftChar for easier tracking:
            const leftChar = str[left];
            map.set(leftChar, map.get(leftChar) - 1)
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}

console.log(getLongestSubWithDistinct(stringTheta, k1))
