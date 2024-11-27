function calculateTotal(cart) {
    // Enter your code here
    let total = 0;
    for (let item of cart) {
        let [code, quantity] = item.split(" ");
        quantity = parseInt(quantity, 10);

        if (code == "M") {
            total += 500 * quantity
        }
        else if (code == "J") {
            total += 3000 * quantity
        }
        else if (code == "T") {
            total += 1500 * quantity
        }
        else if (code == "P") {
            total += 10 * quantity
        }

    }
    console.log(total);
} calculateTotal(["M 3", "J 1", "T 2"]);


// Date which comes first 
function date(str1, str2) {
    let dat1 = str1.split("-");
    let dat2 = str2.split("-");

    if (dat1[2] < dat2[2]) {
        console.log(dat1)
    }
    else {
        console.log(dat2);
    }
    if (dat1[1] < dat2[1]) {
        console.log(dat1)
    }


} date("JAN-12-2024", "FEB-1-1900");


// Pattern printing

function pattern(n) {
    let output = ""
    let first = stair(n);
    let sec = staircase(n);
    output = first + sec;
    console.log(output);
} pattern(3)

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let gap = "";
        let star = "";
        let res = "";

        for (let j = 0; j < n - i; j++) {
            gap += " ";
        }
        for (let k = 1; k <= i; k++) {

            star += i;

        }
        res = gap + star;
        return res
    }
}

function stair(n) {
    for (let i = 1; i <= n; i++) {
        let star = "";
        for (let k = 1; k <= i; k++) {

            star += i;
        }
       return star ;
    }
}


//Given an array of strings arr and another string s, check if s in present in arr


function check(arr, str) {
    for (let alpha of arr) {
        if (alpha === str) {
            console.log("S is present in array")
        }
    }
} check(['apple', 'ball', 'cat'], 'cat') ;

//Count the number of occurrences of a string s2 in a string s1. 
//For example s1 = "This is a String" s2 = "is", number of occurences is 2.


function strCheck(s1,str2){
    let count = 0
    let str = s1.split(" ");
    for(let val of str){
        if(val === str2 ){
            count++
        }
    }
    console.log(count)
}strCheck("This  is a String","is") ;




function findSecondLargest(arr) {

    // There should be at least two elements
    if (arr.length < 2) {
        return "Invalid Input";
    }

    // Sort the array in ascending order
    arr.sort();

    // Start from the second last element as 
    // the largest element is at last
    for (let i = arr.length - 2; i >= 0; i--) {
        // If the element is not equal to the 
        // largest element
        if (arr[i] !== arr[arr.length - 1]) {
            return "The second largest element is " + arr[i];
        }
    }

    return "There is no second largest element";
}

// Driver program to test the function
const arr = [12, 35, 10, 35, 10, 34, 1];
console.log(arr.sort())
// Output: The second largest element is 34
console.log(findSecondLargest(arr));

array =  [2,4,5,6,3,9,7]
console.log(array.length - 1);