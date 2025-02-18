//Ternary operators
let age = 21;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);

// Grade checker 
let mark = 70;

if (mark >= 75) {
    console.log("You got an A grade");
} else if (mark >= 60) {
    console.log("You got an B grade");
} else if (mark >= 45) {
    console.log("You got an C grade");
} else {
    console.log("You didn't get an A, B or C grade");
}

//Character checker
let char = 'A';

if (char === 'a') {
    console.log('The character is a.');
} else if (char === 'b') {
    console.log('The character is b.');
} else {
    console.log('The character is something else.');
}



//Qn 1 : Integer checker
let num = 5;

if (num > 0) {
    console.log("The number is positive")
}
else if (num < 0) {
    console.log("The number is negative")
}
else {
    console.log("The number is zero")
}


//Qn 2 : Vowel Checker

let letter = 5;

if (letter === "a" || letter === "A" || letter === "e" || letter === "E" || letter === "i" || letter === "I" || letter == "o" || letter == "O" || letter == "u" || letter == "U") {
    console.log("The character is a vowel");

}
else {
    console.log("The character is a consonant");
}

//Qn 3 : E-Commerce platform reward system 

let customer = false;
let amount = 50;

if (customer) {
    reward = amount / 10;
    console.log("Points Earned :" + Math.trunc(reward));
}

else {
    console.log("No points earned")
}

//Qn 4 : Leap Year 

function isLeapYear(a) {
    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
        console.log("Y");
    } else {
        console.log("N");
    }
} isLeapYear(1900);

//Qn 5 : Duckworth-Lewis method
function dlMethod(teamScore, targetScore, oversLeft) {
    if (teamScore >= targetScore) {
        console.log("Team wins by DL method");
    }
    else if (teamScore < targetScore || oversLeft > 0) {
        console.log("Match to be continued");
    }
    else if (teamScore < targetScore || oversLeft == 0) {
        console.log("Team loses by DL met");
    }
}dlMethod(150, 145, 0)

//Qn 6 : Even or Odd 

function EvenOdd(num){
    if(num % 2 == 0){
        console.log("It is even");
    }
    else {
        console.log("It is odd");
    }
}isEven(2);