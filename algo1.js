//! Sorting algorithms, Data Structurues: Bubble Sort, Insertion Sort, 

// given the unsorted array of nums, Use the bubble sort algorithm to sort it:
let nums = [1, 5, 7, 2, 3, 10, 9];

const bubbleSort = (arr) => {
    // validation of the array argument to make sure that it is an object of array, and that the length property is at least 1;
    if (!Array.isArray(arr) || arr.length <= 1) return arr;


    // this for loop of the array condition starts from the back of n-length property of the array until it hits more/or equal to 0 and decreaments the counter j until it reaches that condition:
    //^ NOTE: there is an undefined element that exists after the last element that this loop is catching when starting from the end of the array length:

    for (let j = arr.length; j >= 0; j--) {
        console.log(j);
        console.log(arr[j]);

        // need a second loop which will increased time complexity at worst case for this sorting algorithm to N(O^2) 
        for (let i = 0; i < j - 1; i++) {
            console.log(i);
            console.log(arr[i]);

            // swap elements:
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    //* NOTES:
    // return the finished array using the bubble sort which at worst case is O(N^2) time complexity,
    // the space complexity is O(1) since it is not creating any more space but operating on the array itself.
    return arr;
}

console.log(bubbleSort(nums));

// reassign a new nums array:
nums = [14, 6, 53, 71, 22, 33, 102, 91];

const insertionSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    // traditional loop to capture the values, the new reassigned array argument is unsorted with different element values:
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        console.log(arr[i]);

        // assign a var value to a captured element values of the argument array of nums:
        const value = arr[i];
        // decrease the index value by of the n-length of the array, and capture them in var j:
        let j = i - 1;

        for (j; j >= 0; j--) {
            console.log(i);
            if (arr[j] > value) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = value;
    }

    return arr;
}

console.log(insertionSort(nums));

// reassign a new nums array new element values:
nums = [12, 3, 6, 9, 1, 4, 11];

const selectionSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    // capture the length property of the n-length of the array and assign it to a var:
    const n = arr.length;

    // this loop is not getting the last element either the index or the value: since it is essential arr.length - 1;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort(nums));

// reasign an array of nums: 
nums = [10, 8, 7, 1, 5, 11, 20, 4];

//! A recursive algorithm!
const quickSort = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    //* need a middle pivot n-length of arr argument: the below code snippet will get the last element of n-length of the array!
    // choose an element at random usually the last element for better visualization!
    const pivot = arr[arr.length - 1];

    // init the left and right bucket:
    const left = [];
    const right = [];

    // do not get the last element since we already get it and init it in pivot so it will be n-lenght - 1: excluding the last element of arr:
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i]);
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // call the quickSort recursivelly and destruct the left() pivot and right!
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(nums));

nums = [15, 11, 13, 8, 4, 1, 2, 9];

const mergeSort = (arr) => {
    
    // use the array prototype to make sure the argument is indeed an array object,
    // the below snipped is a a tighter validation code to make sure that argument that is passed is indeed an array with more than 1 element and only has numbers:
    if (!Array.isArray(arr) || arr.length <= 1 || !arr.every(item => typeof item === "number")) return arr;
    
    // get the middle left and right: and call function recursivelly!
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++;
        } else {
            result.push(right[j])
            j++;
        }
    }
    // return the concat-ed result of different subarrays of left and right:
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(nums))
