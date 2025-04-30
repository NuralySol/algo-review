//! Sliding window technique continued Advanced review of the Data Structures:
const stringAlpha = "abciiidef";
const k1 = 3;

// given a string s and an integer k, find the maximum number of vowel characters in any substring of length k.
// 'iii' is the expected answer and return output is 3.

const getSubstringVowels = (str, k) => {
    //* custom string, and k validation for data types:
    if (typeof (str) !== 'string' || str.length === 0) return `ERROR: input a valid string argument!`;
    if (typeof (k) !== 'number' || k <= 0) return `ERROR: input a valid number argument!`;

    // create a set of vowels:
    const vowels = new Set();
    // use the add chaining to add all of the vawels to the set,
    //^ NOTE: Set may only contain unique key value pairs and values themselves are unique making a set a powerful tool to check for unqiue values like a Tuple in python: Set() is a build global-object of the JS language library! 
    vowels.add('a').add('e').add('i').add('o').add('u');

    // init the vowel count from 0 default:
    // init the maxVowel count of the default of 0 as well:
    let vowelCount = 0;
    let maxVowels = 0;

    // init the loop from the 'right' for the sldiding window technique:
    for (let right = 0; right < str.length; right++) {
        // the indices of the string argument:
        console.log(right);
        // logging the values of the string argument:
        console.log(str[right]);

        // finding all of the vowels in the string argument and increamenting the
        if (vowels.has(str[right])) {
            vowelCount++;
        };
        // shrink the window if the size exceeds k argument:
        if (right >= k) {
            if (vowels.has(str[right - k])) {
                vowelCount--;
            }
        }
        // get the mav value using the Math.max() object:
        maxVowels = Math.max(maxVowels, vowelCount);
    }
    return maxVowels;

};

// invoke function and pass in the argument values of stringAlpha, k1 variable target:
console.log(getSubstringVowels(stringAlpha, k1));

//! Hard interview question(Minimum Window Substring) - Prompt:
// Given two strings s and t, return the smallest window in s which contains all the characters of t (including duplicates).
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"

const stringBeta = "ADOBECODEBANC";
const target = "ABC";

const getMinWindowSubstring = (str, k) => {
    // custom validation of two string target length cannot be more than the main argument string and length properties cannot be 0:
    if (typeof (str) !== 'string' || str.length === 0) return `ERROR: input a valid string`;
    if (typeof (k) !== 'string' || k.length === 0) return `ERROR: input a valid string`;
    if (str.length < k) return 0;

    //* create a need and a window Map objects!
    const need = new Map();     // to store the chacater count of k:
    const window = new Map();   // to store the current window counts:

    //* NOTE: must populate the need Map object from a target string: "counting" up all of the frequencies of  a target k!
    for (let char of k) {
        need.set(char, (need.get(char) || 0) + 1)
    }

    // init all of the default values of left, right, valid and start:
    // NOTE: minLength is set to Infinity, and anything compared to it will be less than Infinity value:
    let left = 0;
    let right = 0;
    let valid = 0;
    let start = 0;
    let minLength = Infinity;

    // while loop of right which 0, and the length of the argument str.length:
    while (right < str.length) {
        let char = str[right];
        // move the right pointer to grab all of the elements and increament it:
        right++;

        if (need.has(char)) {
            window.set(char, (window.get(char) || 0) + 1);
            if (window.get(char) === need.get(char)) {
                valid++;
            }
        } 
        
        // NOTE: still inside the while loop, shrink the window when all needed chars are matched:
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
                window.set(d, window.get(d) - 1)
            }
        }
    }
    return minLength === Infinity ? "" : str.slice(start, start + minLength);
}

console.log(getMinWindowSubstring(stringBeta, target));

// ------------------------------------------------------------------------ //
//! Greek letter for naming convention: 
// Alpha - Α α Beta - Β β Gamma - Γ γ Delta - Δ δ Epsilon - Ε ε Zeta - Ζ ζ
// Eta - Η η Theta - Θ θ Iota - Ι ι Kappa - Κ κ Lambda - Λ λ Mu - Μ μ
// Nu - Ν ν Xi - Ξ ξ Omicron - Ο ο Pi - Π π Rho - Ρ ρ Sigma - Σ σ/ς
// Tau - Τ τ Upsilon - Υ υ Phi - Φ φ Chi - Χ χ Psi - Ψ ψ Omega - Ω ω

const stringGamma = "cbaebabacd";
const p = 'abc';

// expected outpute is: [0, 6], 
// - The substring starting at index 0 (`"cba"`) is an anagram of `"abc"`.
// - The substring starting at index 6 (`"bac"`) is an anagram of `"abc"`.

const findAnagramsInString = (str, p) => {
    // custom validation, for this problem:
    if (typeof (str) !== 'string' || str.length <= 0) return 'Invalid string argument!';
    if (typeof (p) !== 'string' || str.length < p.length) return [];

    // init two map objects, need and map!
    const need = new Map();
    const window = new Map();
    
    //* create a need map for comparison: anagram target mapped!
    for (let char of p) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    // init all of the default values of left, right, valid count and result = [] array:
    let left = 0;
    let right = 0;
    let valid = 0;
    // NOTE: an emtpy array to push the result in using the .push() method for valid anagrams:
    let result = [];

    // while loop of right which is 0 < str.length:
    while (right < str.length) {
        const c = str[right];
        right++;

        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
        }

        // when the window size is p.length:
        while (right - left === p.length) {
            //TODO: a help function for map equality:
            if (isMapEqual(window, need)) {
                result.push(left);
            }
            const d = str[left];
            left++;

            if (need.has(d)) {
                if (window.get(d) === 1) {
                    window.delete(d)
                } else {
                    window.set(d, window.get(d) - 1)
                }
            }
        }
    }
    return result;
}

//* NEED a helper function, isMapEqual for the above function to work!
const isMapEqual = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}

console.log(findAnagramsInString(stringGamma, p));
