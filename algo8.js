//! Higher order functions:
// if a function is a chef, then the higher order chef hires other chefs or returns a new chef to you:

//* practice:

const greet = (name) => {
    return `Hello, ${name}`;
}
// this a higher order function which will take in a function as an argument and return that function!
const callWithLogging = (fn, arg) => {
    console.log('Calling function...');
    return fn(arg);
}

console.log(greet("Nuraly"));
console.log(callWithLogging(greet, "Nuraly"));

//* Return a function!
const multiplier = (factor) => {
    return function (num) {
        return num * factor;
    }
}

const double = multiplier(2);
console.log(double(5));

//! More comprehensive examples of HoF and their uses in the real world!

// HOF: this will take in function as an argument call:
const withLogging = (fn) => {   
    return function (...args) {
        console.log(`Calling ${fn.name} with args: `, args);
        const result = fn(...args);
        console.log(`Result: `, result);
        return result;
    }
}

const add = (a, b) => {
    return a + b;
}
// call the function with function argumet!
const loggedAdd = withLogging(add);
loggedAdd(2, 3);


//! Custom filter generator:
const greaterThan = (min) => {
    return function (x) {
        return x > min;
    }
}

const filterGreaterThan10 = greaterThan(10);
console.log([5, 12, 8, 20].filter(filterGreaterThan10))

//! Function composition (right to left);
const compose = (f, g) => (x) => f(g(x));

const doubled = x => x * 2;
const increament = x => x + 1;

const doubleAfterIncreament = compose(doubled, increament);
console.log(doubleAfterIncreament(3));


//! Debounce function which delays execution:
const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);

    }
}

const search = debounce(query => console.log("Searching for,", query), 1500);

search("he");
search('hel');
search('hello');

//! Execution context and closures:
// private variables that are enclosed within the function:
function makeCounter() {
    let count = 0;
    // anon function which increaments the count!
    return () => ++count;
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

//! adanvced methods for array object: 
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(n => n * n);
console.log(squares);

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

const odds = numbers.filter(n => n % 2 !== 0);
console.log(odds);

const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);