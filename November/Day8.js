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
  }isBeautifulArray([5, 25, 35, -5, 30])


  //pattern

  function hallowSquare (n) {
    let outputStr = "";
    if (n == 1) {
        console.log(1);
        return;
    }
    for(let i = 1;i <=n ;i++) {
        outputStr += "1 "
    }
    console.log(outputStr.trim());

    for(let j = 2; j <=n-1; j++) {
        let line = "";
        for(let k = 1; k <= n; k++) {
            if(k == 1 || k == n) {
                line += "*" + " ";
            }
            else {
                line += "  ";
            }
        }
        console.log(line.trim());
    }
    outputStr = "";
    for(let i = 1;i <=n ;i++) {
        outputStr += n + " ";
    }
    console.log(outputStr.trim());

}hallowSquare(4)

