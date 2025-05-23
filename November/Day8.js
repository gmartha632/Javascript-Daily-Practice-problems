//A number can be said as a strong number when the sum of the factorial of the individual digits is equal to the number.
//For example, 145 is a strong number. 1! + 4! + 5! 145. Write a program to check whether a given number is a strong number or not

function digitSumFact(n) {
  let num = n;
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += factorial(digit);
    num = Math.trunc(num / 10);
  }

  if (n == sum) {
    console.log("Strong");
  } else {
    console.log("Not Strong");
  }
}

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
digitSumFact(145);

//You are given an array of numbers.you have to find whether the array is beautiful or not.
// A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5 Output Description: Print 1 if array is beautiful and 0 if it is not Input: arr = [5, 25, 35, -5, 30] output: 1
function isBeautifulArray(arr) {
  // Calculate the sum of all elements in the array
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  // Check if sum is divisible by 2, 3, and 5
  if (sum % 2 === 0 && sum % 3 === 0 && sum % 5 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}
isBeautifulArray([5, 25, 35, -5, 30]);

//pattern printing

function hallowSquare(n) {
  let outputStr = "";
  if (n == 1) {
    console.log(1);
    return;
  }
  for (let i = 1; i <= n; i++) {
    outputStr += "1 ";
  }
  console.log(outputStr.trim());

  for (let j = 2; j <= n - 1; j++) {
    let line = "";
    for (let k = 1; k <= n; k++) {
      if (k == 1 || k == n) {
        line += "*" + " ";
      } else {
        line += "  ";
      }
    }
    console.log(line.trim());
  }
  outputStr = "";
  for (let i = 1; i <= n; i++) {
    outputStr += n + " ";
  }
  console.log(outputStr.trim());
}
hallowSquare(4);

//Co-prime number

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function CoPrime(a, b) {
  let g = gcd(a, b);
  if (g == 1) {
    console.log("Co-Prime");
  } else {
    console.log("Not a Prime");
  }
}
CoPrime(4, 7);

//Pattern

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      continue;
    } else {
      let outputstr = "";
      for (let j = 1; j <= i; j++) {
        outputstr += "*";
      }
      console.log(outputstr)
    }
  }
}printPattern(4)


// Write an algorithm to find the square root of a number without using a library function with accuracy upto 2 decimal places.
function sqrtOfNum(num,digit) {
    if(num<=1) return num;
    let n;
    for(let i=0;i<=num;i++){
        if(i*i>num) break;
        else n=i;
    }
    console.log(n);
    if(n*n==num){
        return n;
    }else{
        for(let i=1;i<10**digit;i++){
            let val=n+(i/10**digit);
            if(val*val>num) return n+((i-1)/10**digit);
        }
    }
}
console.log(sqrtOfNum(646573573458385,4));

