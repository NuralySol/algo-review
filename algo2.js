//! Advanced loops: JS

//* Basic concepts review:
let nums = [1, 3, 5, 7, 9, 11];

// starting adress, condition, increament or decreament!
for (let i = 0; i < nums.length; i++) {
    console.log(i);
    console.log(nums[i]);
}

let i = 0;

// while loop needs an access to a starting address:
while (i < 5) {
    console.log(i);
    i++;
}
// do while loop!
do {
    console.log(i);
    i++;
} while (i < 5);

//! looping over arrays:
console.log(nums);

// modern way of looping over an array of nums:
for (let num of nums) {
    console.log(num);
}

// using forEach method: method takes in two arguments operates in place!
nums.forEach((num, index) => {
    console.log(num, index);
})

// classic loop:
for (let i = 0; i < nums.length; i++) {
    console.log(i);
}

const user = { name: 'Nuraly', age: 33 };
// use the in keyword to access an object to iterate over!
for (let key in user) {
    console.log(key, user[key]);
}

let numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

const even = numbers.filter(n => n % 2 === 0);
console.log(even);

const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);

//* Advanced concepts review:
for (let i = 0; i < 10; i++) {
    // break once the counter reaches 5! this will exit the loop early:
    if (i === 5) break;
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    // this will skip once the increamenter hit the element value of 2!
    if (i === 2) continue;
    console.log(i);
}

[1, 2, 3].forEach(num => {
    if (num === 2) return; // only skips inside the callback not the loop itself!
    console.log(num);
})

//^ Nested loops, matrix in JS:

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row of matrix) {
    console.log(row); // log every row
    for (let col of row) {
        console.log(col); // this will log every cell:
    }
}

const map = new Map([
    ['a', 1],
    ['b', 2]
]);

// iterating over map object constructor with key and value
for (let [key, value] of map) {
    console.log(`${key} -> ${value}`);
}

//^ NOTE: set will only take in unique elements and discard copies! 
const set = new Set([1, 2, 3, 3, 5]);
for (let val of set) {
    console.log(val);
}

//* dynamic looping Until a condition based on State!

let num = 0;
while (Math.pow(num, 2) < 100) {
    console.log(num);
    num++;
}

const arr = ['a', 'b', 'c', 'd'];
// entries is useful to get the addresses, and the value associated with them!
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}

//* Id generator using the loop:

function* idGenerator() {
    let id = 0;
    while (true) {
        yield id++;
    }
}

// dynamic id generator based on the number of calls of the function*
// this allows for custom iterative behavior, like a loop control system!
const gen = idGenerator();
console.log(gen.next().value);
console.log(gen.next().value);

//^ recursive loops: i.e. DOM manipulation! 
const recursiveLoop = (arr, i = 0) => {
    if (i >= arr.length) return;
    console.log(arr[i]);
    recursiveLoop(arr, i + 1);
}

recursiveLoop(nums);

//* decreamenting the loops:

const arrAlpha = [1, 2, 3, 4, 5, 6];

// start position is the alst element of n-length - 1, to actually grab the last element for decreameting operations:

for (let i = arrAlpha.length - 1; i >= 0; i--) {
    // backwards indices
    console.log(i);
    // backwards elements of the array in decreamenting loop:
    console.log(arrAlpha[i]);
}

// Modifying the array while looping

nums = [1, 2, 3, 4, 5, 6];

for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i]);

    // removes all of the evens using the splice method!
    if (nums[i] % 2 === 0) {
        nums.splice(i, 1);
    }
}

// new modifed array of nums:
console.log(nums);

//* chained functional loops: with method chaining!
const result = [1, 2, 3, 4, 5].filter(n => n % 2 === 1).map(n => n * 2).reduce((a, b) => a + b);
console.log(result);

//* Custom polyfills (DIY loops); i.e. map!

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result;
}

// call the custom method polyfill i.e. simulation! 
console.log([1, 2, 3].myMap(x => x * 10));

//* Dynamic range like in Python: But it needs to be custom made!

const range = (start, end, step) => {

    const result = [];

    for (let i = start; i <= end; i += step) {
        result.push(i)
    }
    return result;
}

console.log(range(1, 10, 2));

// loop until the pattern is found:
// this is a dynamic exit loop!
let x = 0;
while (true) {
    const square = x * x;
    if (square > 100) break;
    console.log(square);
    x++;
};

// recursive combinations:
const generate = (prefix, digits, result = []) => {
    if (!digits.length) {
        result.push(prefix); // Store the permutation
        return;
    }

    for (let i = 0; i < digits.length; i++) {
        generate(
            prefix + digits[i],
            digits.slice(0, i) + digits.slice(i + 1),
            result
        );
    }

    return result;
};

const allPermutations = generate('', '123');
console.log(allPermutations);

//! Closures:

// a function that "remembers" the variables from where they were created:
function makeCounter() {
    let count = 0;
    return () => ++count;
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// memoization - catching the result of the function calls to avoid repeated work:
const memo = {}

const fibo = (n) => {

    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    return memo[n] = fibo(n - 1) + fibo(n - 2);
}

console.log("result fibo: ", fibo(6));

// Custom iterators and generators:
// function* is a function generator!
function* countUpTo(max) {
    for (let i = 1; i < max; i++) {
        yield i;
    }
}

const counterAlpha = countUpTo(3);
const counterBeta = countUpTo(10);
console.log([...counterAlpha]);
console.log([...counterBeta]);

// looping with destructuring:
const entries = [['a', 1], ['b', 2], ['c', 3]];

for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
}

// looping with reduce:
const arr1 = ['a', 'b', 'c', 'd'];

// this will create an object with key value pairs:
const res = arr1.reduce((acc, curr, i) => {
    acc[i] = curr.toUpperCase();
    return acc;

}, {});

console.log(res);

// Dynanmic Loops with .entries() + Index access:
const fruits = ['apple', 'banana', 'cherry'];

const fruitCounter = (arr) => {
    const result = [];

    for (const [index, item] of arr.entries()) {
        result.push(`${index + 1}. ${item}`)
    }
    return result
}

console.log(fruitCounter(fruits));

// early exit loops with .some() or find();

nums = [2, 4, 6, 7, 8];

// this is better than filter if you only need one match per iteration:
const found = nums.find(n => n % 2 !== 0);
const hasOdd = nums.some(n => n % 2 !== 0);

// recursive backtracking:
const generatePermutations = (arr, prefix = [], result = []) => {
    if (!arr.length) {
        result.push(prefix);
        return result;
    }

    for (let i = 0; i < arr.length; i++) {
        generatePermutations(
            arr.slice(0, i).concat(arr.slice(i + 1)),
            prefix.concat(arr[i]),
            result
        );
    }

    return result;
};


const oneToFourPermutations = generatePermutations([1, 2, 3, 4]);
console.log(oneToFourPermutations);

// looping with state machine Logic:

const text = 'a(b(c)d)e';
let depth = 0;

for (let char of text) {
    if (char === '(') depth++;
    else if (char === ')') depth--;
    else if (depth === 0) console.log(char);
}

// an island problem is a classic depth traveral problem one of the most asked problems at FAANG level companies:
// given this 2d matrix of grid there are 3 island actually:
//^ expected output is 3 island:

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

// DFS version of the solution for the grid matrix, traversal!
const getIslandsDFS = (grid) => {
    // if grid is emtpy just return 0;
    if (!grid.length) {
        return 0;
    }
    // getting rows and columns of the grid using the drilling of the matrix structure: grid[0];
    let rows = grid.length;
    let col = grid[0].length;
    let count = 0;

    const dfs = (r, c) => {
        // base case for out of bounds or water!
        if (r < 0 || c < 0 || r >= rows || c >= col || grid[r][c] === '0') {
            return;
        }
        // mark as visited:
        grid[r][c] = '0';

        // explore all directions with a recursive dfs call
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    };

    // loop over every cell in the grid:
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === '1') {
                count++; 
                dfs(r, c);
            }
        }
    }

    return count;

}

// need a deep copy to work with since we are mutating the original
const cloneGrid = grid.map(row => [...row]);

console.log(getIslandsDFS(cloneGrid));
