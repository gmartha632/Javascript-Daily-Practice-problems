// L3 problems

//pattern printing
function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let gap = "";
    let star = "";
    let res = "";

    for (let j = 0; j < n - i; j++) {
      gap += " ";
    }
    for (let k = 1; k <= i; k++) {
      if (i % 2 == 0) {
        star += "* ";
      } else {
        star += i + " ";
      }
    }
    res = gap + star;
    console.log(res);
  }
}
pattern(4);

//Lcm

function gcd(a,b){
    while(b!== 0){
        let temp = b ;
        b = a % b ;
        a = temp ;
   }
   return a
}

function lcm(a,b){
    let result = Math.abs(a*b)/gcd(a,b)
   console.log(`LCM : ${result}`)
}lcm(15,20);


// Fibbonaci series

function nthFibonacci(n) {
    if (n <= 1) return n;

    // To store the curr Fibonacci number
    let curr = 0;

    // To store the previous Fibonacci numbers
    let prev1 = 1;
    let prev2 = 0;

    // Loop to calculate Fibonacci numbers from 2 to n
    for (let i = 2; i <= n; i++) {
    
        // Calculate the curr Fibonacci number
        curr = prev1 + prev2;

        // Update prev2 to the last Fibonacci number
        prev2 = prev1;

        // Update prev1 to the curr Fibonacci number
        prev1 = curr;
    }

    return curr;
}

let n = 5;
let result = nthFibonacci(n);
console.log(`Fibbonaci sequnce: ${result}`);


//fibonacci

function Fibonacci(n) {
  if (n <= 1) return n;

  // To store the curr Fibonacci number
  let curr = 0;

  // To store the previous Fibonacci numbers
  let prev1 = 1;
  let prev2 = 0;

  // Loop to calculate Fibonacci numbers from 2 to n
  for (let i = 1; i <= n; i++) {
  console.log(prev2)
      // Calculate the curr Fibonacci number
      curr = prev1 + prev2;

      // Update prev2 to the last Fibonacci number
      prev2 = prev1;

      // Update prev1 to the curr Fibonacci number
      prev1 = curr;
  }

  
}Fibonacci(5)
