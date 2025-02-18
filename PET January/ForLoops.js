//For loop
for (let count = 5; count >= 1; count--) {
  console.log(`Count is: ${count}`);
}

// Print all the even numbers upto n.

let n = 13;
for (let i = 2; i <= n; i += 2) {
  console.log(i);
}

//Qn 1 : First n odd numbers

function nOddNumbers(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    b = 2 * i - 1;
    a += b + " ";
  }
  console.log(a);
}
nOddNumbers(5);

//Qn 2 : First n multiples of 5

function nMultiplesofThree(n) {
  let a = 3;
  for (let i = 1; i <= n; i++) {
    b = a * i;
    console.log(b);
  }
}
nMultiplesofThree(5);

//Qn 3 : Sum for first N multiples of 5
function SumOfNmultiples(n) {
  let a = 5;
  let b = 0;
  for (let i = 1; i <= n; i++) {
    c = a * i;
    b += c;
  }
  console.log(b);
}
SumOfNmultiples(3);

//Qn 4 :  Print n number of times if n = 5 then print 5 5 5 5 5, if n = 3 print 3 3 3

function nTimes(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    a += n + " ";
  }
  console.log(a);
}
nTimes(5);

//Qn 5 : All multiples of 2 between a and b

function betweenMultiples(a, b) {
  let c = "";
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      c += i + " ";
    }
  }
  console.log(c);
}
betweenMultiples(5, 15);

//Qn 6 : Sum of N even numbers
function SumOfNEven(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 2 * i;
  }

  console.log(sum);
}
SumOfNEven(5);

//Qn 7 : Print Character
function printChar(n, char) {
  char = "";
  for (let i = 0 ; i < n ; i++ ){
    char += "*"

  }
  console.log(char);
}
printChar(8, "*");

//Qn 8 : Print All Multiples Of 5 Between
function printAllMultiplesOf5Bet(a,b){
  let val = "" ;
  for(let i = a ; i <= b ; i++){
    if(i % 5 == 0){
      val += i + ", "
    }
  }
  val = val.slice(0, val.length-2)
  console.log(val);
}printAllMultiplesOf5Bet(10, 30); 


//Hackerrank problems
function gradingStudents(grades) {
  if (grades < 38) {
    return grades;
  } else if (grades > 38) {
    let n = grades;
    for (let i = n; i < 100; i++) {
      if (i % 5 == 0) {
        //  console.log(i) ;
        if (i - grades < 3) {
          console.log(i);
          break;
        } else {
          console.log(grades);
          break;
        }
      }
    }
  }
}gradingStudents(58)


//Debugging

//Sum Numbers
function sumNumbers(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  // return sum;
  console.log(sum)
}sumNumbers(10)

//Grade calculator
function calculateGrade(score) {
  if (score >= 90) {
      console.log("Grade: A");
  } else if (score >= 80) {
      console.log("Grade: B");
  } else if (score >= 70) {
      console.log("Grade: C");
  } else if (score >= 60) {
      console.log("Grade: D");
  } else {
      console.log("Grade: F");
  }
}calculateGrade(85)

// Print the maximum between 3 variables.
let a = 5;
let b = 10;
let c = 3;

if( a > b && a > c) {
    console.log(a);
}

else if (b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}

//Generate Series for square numbers upto n 
function generateSeries(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
      let term = i * i; 
      str += term + " ";
  }
  return str;
}

// Example usage
let d = 5;
let result = generateSeries(d);
console.log(`The first ${d} terms of the series are: ${result}`);


//Check whether multiple of 6
function isMultipleOfSeven(N) {
  if (N % 6 === 0) { 
      console.log("No");
  } else {
      console.log("YES");
  }
}

// Example usage
let N = 49;
isMultipleOfSeven(N);


//Practice Problems


//Leap year
function isLeapYear(a) {
  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
      console.log("Y");
  } else {
      console.log("N");
  }
} isLeapYear(1900);

//Sum of digits of a given positive number
function SumofDigtis(num){

  let sum = 0 
  let n = num  
  while(n > 0){

  }
}