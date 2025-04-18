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
    // validation for the array argument:
    
}

console.log(removeDuplicatesArr(nums))