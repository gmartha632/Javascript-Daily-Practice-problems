// Recursion
// Recursion concept
function func1() {
  console.log("Calling func1");
  func2();
  func3();

  console.log("Completed func1");
}

function func2() {
  console.log("Calling func2");
  console.log("Executed func2");
}

function func3() {
  console.log("Calling func3");
  console.log("Executed func3");
}

func1();

//Countdown Sum
function Countdown(n) {
  if (n <= 0) {
    console.log("Done");
    return;
  }
  console.log(n);
  Countdown(n - 1);
}Countdown(5)

// Factorial

function factorial(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0 || n == 1) {
    // console.log(n);
    return 1;
  } else {
    let result = n * factorial(n - 1);
    // console.log(result);
    return result;
  }
}

result = factorial(5);
console.log(result);

//Star pattern

function pattern(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0 || n == 1) {
    console.log("*");
    return "*";
  } else {
    let output = "*" + " " + pattern(n - 1);
    console.log(output);
    return output;
  }
}

output = pattern(5);

//Star Pattern
function PatternPrint(n) {
  if (n == 0) {
    return "";
  }
  if (n == 1) {
    console.log("*");
    return "*";
  } else {
    result = "* " + PatternPrint(n - 1);
    console.log(result);
    return result;
  }
}
PatternPrint(5);

//Staircase in recursion
// function StairCase(n){
//     if(n == 0){
//         return ""
//     }

// }
