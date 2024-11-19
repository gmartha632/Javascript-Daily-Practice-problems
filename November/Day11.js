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
  }isBeautifulArray([3,7,10,15,25])



  //Amstrong number

  function digitSumFact(n) {
    let num = n; 
    let sum = 0;
    while ( num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.trunc(num / 10); 
    }

    if(n == sum) {
        console.log("Strong");
    }
    else {
        console.log("Not Strong");
    }
}digitSumFact(145)

function factorial(n) {
    let fact = 1;
    for (let i  = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}


//pattern

function hallowSquare (n) {
    // Enter your code here
    let outputStr = "";
    if (n == 1) {
        console.log(1);
        return;
    }
    for(let i = 1; i <= n; i++) {
        outputStr += "1 ";
    }
    console.log(outputStr);
    
    for (let i = 2; i <= n -1; i++) {
        let outputStr = "";
        for(let j = 1; j <= n; j++) {
            if(j == 1 || j == n) {
                outputStr += "* ";
            }
            else {
                outputStr += "  ";
            }
        }
        console.log(outputStr);
    }
    
    outputStr = "";
    for (let i = 1; i <= n ;i++) {
        outputStr += n + " ";
    }
    console.log(outputStr);
    
}hallowSquare(5)