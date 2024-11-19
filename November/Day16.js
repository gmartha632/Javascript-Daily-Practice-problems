// CSA of cylinder

function CSA(r, h) {
  c = 2 * Math.PI * r * h;
  console.log(c);
}
CSA(12, 30);

// N terms of square nnumbers

function NSquareTerms(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i * i);
  }
  let output = arr.length > 0 ? arr.join(",") : "";
  console.log(output);
}
NSquareTerms(5);

// Average sum
function avg(marks) {
  let sum = 0;
  for (mark of marks) {
    sum += mark;
  }
  console.log(`Average marks = ${sum} `);
}
avg([30, 40, 50, 60, 70]);

// Star

function star(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    let gap = "";
    for (let j = 1; j <= i; j++) {
      // for(let j = i ; j >= 1  ;j--){
      str += i;
    }
    for (let k = 0; k <= n - i; k++) {
      gap += " ";
    }
    console.log(gap + str);
  }
}
star(3);

// Prime numbers in the range

function printPrimesInRange(m, n) {
  let str = "";
  // Enter you code here
  for (let i = m; i <= n; i++) {
    let prime = true;
    for (j = 2; j <= m; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      str += i + ",";
    }
  }
  let output = str.slice(0, str.length - 1);
  console.log(output);
}
printPrimesInRange(10, 30);

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

// Function to calculate the sum of factorials from 1 to N
function sumOfFactorials(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += factorial(i);
  }
  console.log(sum);
}
sumOfFactorials(5);

// Determine the type of triangle
function Triangle(a, b, c) {
  if (a == b && a == c) {
    console.log("Equilateral");
  } else if (a == b || a == c || b == c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
Triangle(5, 5, 8);

// Difference between the maximum and minimum element in a given array.

function Minmax(arr) {
  let a = Math.max(...arr);
  let b = Math.min(...arr);
  let Difference = a - b;
  console.log(Difference);
}
Minmax([30, 40, 25, 60, 70, 50]);

// Minimum number in an array
function Min(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // console.log(`Minimum number in an array : ${min}`)
  return min;
}
Min([4, 5, 3, 7, 9]);

// Maximum number in an array
function Max(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  //   console.log(`Maximum number in an array : ${max} `);
  return max;
}
Max([4, 5, 3, 7, 12, 9, 2, 1]);


// Difference between the maximum and minimum element in a given array without any method.

function Maxmin(arr){
    let diff = Max(arr) - Min(arr)
    console.log(`Maxmin diff : ${diff}`)
}Maxmin([2,3,4,5,9,8])