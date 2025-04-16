const nums = [2, 1, 5, 1, 3, 2];
const k = 3;

const maxSubarraySum = (arr, k) => {
    // validation of the array:
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    // initialize the counters for maxSum and subarray sum:
    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
        console.log(i);
    }

    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSubarraySum(nums, k));

