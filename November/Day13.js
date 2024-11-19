// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If divisible by any number, it's not prime
  }
  return true;
}

// Function to print prime numbers in a given range m, n
function printPrimesInRange(m, n) {
  let primes = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  let output =
    primes.length > 0 ? primes.join(", ") : "No primes in this range";
  console.log(output);
}
printPrimesInRange(10, 30);

//  Distinct number of vowels

function countDistinctVowels(str) {
  const vowels = "aeiou";
  let distinctVowels = "";

  for (let char of str) {
    if (vowels.includes(char) && !distinctVowels.includes(char)) {
      distinctVowels += char;
    }
  }
  console.log(`Distinct vowels : ${distinctVowels.length}`);
}
countDistinctVowels("coolie");

// for of method in array
const array = [1, 2, 3, 4, 5];
for (const item of array) {
  console.log(item);
}

//for of method in string
const str = "Hello";
// for (let i = 0 ; i < str.length ; i++) {
//     console.log(str[i]);
// } or
for (const char of str) {
  console.log(char);
}
