// pattern
function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let gap = "";
    let char = "";
    for (let j = 0; j <= n - i; j++) {
      gap += " ";
    }
    for (let k = 1; k <= i; k++) {
      if (i % 2 === 0) {
        char += "$ ";
      } else {
        char += i + " ";
      }
    }

    console.log(gap + char);
  }

  for (let i = n - 1; i >= 1; i--) {
    let gap = "";
    let char = "";
    for (let j = 0; j <= n - i; j++) {
      gap += " ";
    }
    for (let k = 1; k <= i; k++) {
      if (i % 2 === 0) {
        char += "$ ";
      } else {
        char += i + " ";
      }
    }

    console.log(gap + char);
  }
}
pattern(3);

// Divisibility of 11
let arr = [1, 3, 5, 6, 8, 12];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
if (sum % 11 == 0) {
  console.log("It is divisible by 11");
} else {
  console.log("It is not divisible by 11");
}


// Function to calculate GCD (Greatest Common Divisor) of two numbers
function gcd(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

// Function to calculate LCM (Least Common Multiple) of two numbers
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// Function to calculate LCM of three numbers
function lcmOfThree(a, b, c) {
  return lcm(lcm(a, b), c);
}

// Example usage
let a = 12, b = 15, c = 20;
let result = lcmOfThree(a, b, c);
console.log(`The LCM of ${a}, ${b}, and ${c} is: ${result}`);





