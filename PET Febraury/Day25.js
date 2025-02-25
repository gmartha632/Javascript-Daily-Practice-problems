// Write a program/function that takes an array of integers as input and returns a new array

// with duplicate values removed. Don’t use any inbuilt libraries like includes. You can use join for printing the result

// Example:

// list:: [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1]

// after removing duplicates: 1 2 3 4 5 6 7 8

// list: [5, 10, 15, 20, 10, 25, 30, 20, 35, 40]

// after removing duplicates: 5 10 15 20 25 30 35 40

// Requirements:

// The order of elements in the output array should be the same as the first occurrence in the

// input array.

// For example:

// Test	Result
// removeDuplicates( [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1])
// 1 2 3 4 5 6 7 8
// removeDuplicates([5, 10, 15, 20, 10, 25, 30, 20, 35, 40])
// 5 10 15 20 25 30 35 40

function removeDuplicates(arr) {
    let result = [];
    if(arr === null || arr.length === 0) {
        console.log("");
        return;
    }
    
    // Iterate over all elements in arr
    for (let i = 0; i < arr.length; i++) {
        // check if element is already there in result
        if(isPresentInArr(result,arr[i])) {
            continue;
            // Skip the element
        }
        else {
            result.push(arr[i]);
        }
        
    }
    console.log(result.join(" "))
}

function isPresentInArr(arr,element) {
    for(let i = 0; i < arr.length; i++) {
        if(element == arr[i]) {
            return true;
        }
    }
    return false;
}


//Given a String check if it's a palindrome or not WITHOUT using any library functions like reverse() etc

// For example:

// Test	Result
// isPalindrome("madam");
// Palindrome
// isPalindrome("teacher");
// Not a palindrome

function isPalindrome(str) {
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    if (str == reverseStr) {
        console.log("Palindrome");
    }
    else {
        console.log("Not a palindrome");
    }
}


//There are n stairs, and a person standing at the bottom wants to climb stairs to reach the top. The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.

// Input: n = 2
// Output: 2
// Explanation: There are two ways to reach 2th stair: {1, 1} and {2}. 

// Input: n = 4
// Output: 5
// Explanation: There are five ways to reach 4th stair: {1, 1, 1, 1}, {1, 1, 2}, {2, 1, 1}, {1, 2, 1} and {2, 2}.

function printStairsCount (n) {
    console.log(stairsCount(n));
}

function stairsCount(n) {
    if(n == 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    else {
       return  stairsCount(n - 1) + stairsCount(n - 2);
    }
}

//We Can also solve this by fibonacci method

function fibonacciStaris(n){
    if(n == 1 ) return 1
    
       let curr = 0 ;
        let prev1 = 1 ;
        let prev2 = 0 ;
    
    
    for(let i = 1 ; i <= n ; i++){
      
      curr = prev1 + prev2
      prev2 = prev1
      prev1 = curr
      }
      
      console.log(curr)
}fibonacciStairs(2)


//Given an array of Integers count the number of prime numbers in the given array. Remember Negative numbers are not prime. A prime number is a whole number that is greater than 1 and has no positive divisors other than itself and 1.

// Ensure to print the result on the console. 

// For example:

// Test	Result
// primeNumberCount([4, 3,23,41,22,31,11,7])
// 6


function primeNumberCount(arr) {
    
    if (arr.length === 0) {
        console.log(0);
        return;
    }
    let primeCount = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])) {
            primeCount++;
        }
    }
    console.log(primeCount);
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    else {
        for(let i = 2; i <= n/2; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}