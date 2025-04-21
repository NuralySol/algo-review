// ! Two pointer techniqe uses two indices or aka pointers to traverse the data:

let nums = [1, 2, 3 ,4, 5, 6];
let target = 6;

// expected return is a boolean if target equal to 6 has been found:

const getTwoSum = (arr, k) => {
    // validation of arr argument and k argument types:
    if (typeof (k) !== 'number') return k;
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;

    // get the indices of the array argument for the left-pointer and right-pointer start at the edges of the array:
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === k) {
            return true;
        } else if (sum < target) {
            left++
        } else {
            right--;
        }
    }
    return false;
}

// expected return of this function is a boolean value of the argument array:
console.log(getTwoSum(nums, target));

//! remove the duplicates from the array:
nums = [1, 1, 2, 2, 3];

const removeDuplicatesArr = (arr) => {
    // this custom validation will make sure that every element in this array is a number, and is indeed an array object
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;

    const seen = new Set();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        console.log(arr[i]);
        if (!seen.has(arr[i])) {
            seen.add(arr[i])
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicatesArr(nums));

//! reverse the array in place:
nums = [1, 2, 3, 4];

const reverseInPlace = (arr) => {
    // validation for the argument of the array:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number'))  return arr;

    // init the left, and right pointers for the:
    let left = 0;
    let right = arr.length - 1;

    // while loop:
    while (left < right) {
        // just swap elements in place:
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // move the pointers:
        left++;
        right--;
    }
    return arr
}

console.log(reverseInPlace(nums));

//! move the all of the zeros of the array to the end: use the optimal solution!
nums = [0, 1, 0, 3, 12];

// this function will use one pointer for this function:
const moveZerosToEnd = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;
    
    let insertPos = 0;

    // first pass, move non-zero elements to the front of the argument array:
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }

    // second pass, fill in the rest of this array with zeros:
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }
    
    return arr;
}

console.log(moveZerosToEnd(nums))

// Sorted Squares:
// Input: [-4, -1, 0, 3, 10]  
// Output: [0, 1, 9, 16, 100]

nums = [-4, -1, 0, 3, 10];

const getSortedSquares = (arr) => {
    // custom validation for the problem:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;
    // make result array to hold the the length of the array and fill it with 0;
    let result = Array(arr.length).fill(0);

    let left = 0;
    let right = arr.length - 1;
    // this will track the position:
    let pos = arr.length - 1;

    while (left <= right) {
        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];
        
        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        pos--;
    }

    return result;
}

console.log(getSortedSquares(nums))

// if a string is a valid palindrome:
// Input: "A man, a plan, a canal: Panama"  
// Output: true

const stringC = "A man, a plan, a canal: Panama";

const isPalindrome = (str) => {
    if (typeof (str) !== 'string') return str;
    // use the regex str.replace(/[^a-zA-Z ]/g, "")
    let cleanedStr = str.replace(/[^a-zA-Z]/g, "");
    let stringAlpha = cleanedStr.toLowerCase();
    let stringBeta = stringAlpha.split("").reverse().join("");

    if (stringAlpha == stringBeta) {
        return true; 
    } else {
        return false;
    }
}

console.log(isPalindrome(stringC))

//* using the two Pointers to solve the isPalindrome:
const isPalindromeTwoPointers = (str) => {
    if (typeof (str) !== 'string') return str;
    
    // using the regex to remove all of the special chars and to make sure that string in a lowercase format
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // get the index values of the clean n-length string:
    let left = 0;
    let right = cleaned.length - 1;

    // this while loop will check for differences from the left and right pointers:
    while (left < right) {
        // check each value from the left and right elements of the cleaned string:
        if (cleaned[left] !== cleaned[right]) return false;
        // increament the right++ and left-- pointers till the midpoint:
        left++;
        right--;
    }
    // return true if it is indeed a palindrome:
    return true;
}

console.log(isPalindromeTwoPointers(stringC))

// container with most water:
// Input: [1,8,6,2,5,4,8,3,7]  
// Output: 49

const wells = [1, 8, 6, 2, 5, 4, 8, 3, 7]; 

const containerWithTheMostWater = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === 'number')) return arr;
    // 8 * 7 will equal to 49 and this combo has the most water:
    let left = 0;
    let right = arr.length - 1;
    let maxArea = 0;

    // use the while loop:
    while (left < right) {

        const height = Math.min(arr[left], arr[right]);
        const width = right - left;
        const area = height * width;

        maxArea = Math.max(maxArea, area);

        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(containerWithTheMostWater(wells))

// TODO:
// three sum:
// Input: [-1, 0, 1, 2, -1, -4]  
// Output: [[-1, -1, 2], [-1, 0, 1]]

nums = [-1, 0, 1, 2, -1, -4];

const getThreeSum = (arr) => {
    if (!Array.isArray(arr) || arr.length < 3 || !arr.every(item => typeof item === 'number')) return arr;
    // sort the array in place:
    arr.sort((a, b) => a - b);

    // an empty array to hold the result array to make sure:
    const result = [];

    // loop 1:
    for (let i = 0; i < arr.length - 2; i++) {
        console.log(arr[i]);
        if (i > 0 && arr[i] == arr[i - 1]) {
            // skip the duplicates for i:
            continue 
        }
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let total = arr[i] + arr[left] + arr[right];

            if (total === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;
                left++;
                right--;
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

console.log(getThreeSum(nums))

// trapping Rain water:
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]  
// Output: 6

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trappingRainWater = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;
    
    let left = 0;
    let right = arr.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                water += leftMax - arr[left];
            } left++;
        } else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right]
            } else {
                water += rightMax - arr[right]
            } right--;
        }
    }
    return water;
}

console.log(trappingRainWater(height));

