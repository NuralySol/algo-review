//! Set() and Map() global object review:

// setting a new Set (); which can only contain unique values:
const set = new Set([1, 2, 3, 4, 5]);
console.log("set: ", set); // each value is key in of itself in a set unlike in map where u can assign them:

const nums = new Set();
nums.add(1);
nums.add(2);
nums.add(3);
console.log('set of nums: ', nums);

nums.has(2);
nums.delete(2);
nums.has(2);
console.log("2 deleted from nums: ", nums);

// removes all of the values inside the set:
nums.clear();
console.log(typeof (nums));




