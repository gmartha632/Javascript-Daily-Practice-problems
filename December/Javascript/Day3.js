// Learn swapping


// Array Destructuring
// Array members can be unpacked into different variables.

const a = [10, 20, 30, 40]

// console.log("Example 1");
// const [x, y, z, w] = a;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);

const [p, q, , r] = a;
console.log("Example 2");
console.log(p);
console.log(q);
console.log(r);

const [s, t] = a;
console.log("Example 3");
console.log(s);
console.log(t);


// Values can be swapped using destructuring assignment


// let x = 10, y = 20;

// // Swapping 
// [x, y] = [y, x];

// console.log(x);
// console.log(y);



// Example of Function Return: Data can also be extracted from an array returned from a function.
// One advantage of using a destructuring assignment is that there is no need to manipulate an entire object in a function but just the fields that are required can be copied inside the function.

function NamesList() {
    return ["a", "b", "c", "d"]
}

let [fst, snd, third] = NamesList();

console.log(fst);
console.log(snd);
console.log(third);




let marks = { x: 21, y: -34, z: 47 };

const { x, y, z } = marks;

console.log(x);
console.log(y);
console.log(z);


// The Nested objects can also be destructured using destructuring syntax. 
const mark = {
    section1: { alpha: 15, beta: 16 },
    section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = mark;
console.log(alpha1, beta1);

//
let obj = {
    name: "GFG",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
}

let { name } = obj;
console.log(name)

let { add: { country: abcd } } = obj
console.log(abcd)

let { add: { state: { code: cd } } } = obj
console.log(cd)

let { add: { state: { article: { topic: ef } } } } = obj
console.log(ef);


//Swapping using temp
let g = 20;
let h = 10;
let temp;

temp = g;
g = h;
h = temp;

console.log(`after swapping a= ${g}`);
console.log(`after swapping b= ${h}`);

g = g + h;//10=10+20 now a would be 30
h = g - h;//20=30-10 now b would be 10
h = g - h;//30=30-10 so a would be now 20

console.log(`after swap a= ${g}`);
console.log(`after swap a= ${h}`);



// Bubble sort Implementation using JavaScript

// Creating the bblSort function
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}

// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
// var arr =["Saab", "Volvo", "BMW"];


// Now pass this array to the bblSort() function
bblSort(arr);



