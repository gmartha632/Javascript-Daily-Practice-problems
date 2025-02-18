// Example of a while loop to count down from 5 to 1

let count = 5;

while (count >= 1) {

    console.log(`Count is: ${count}`);

    count--;

}

// Do while example

let i = 1;
text = 0
do {
  text += "The number is " + i;
  
  i++;
}
while (i < 10);
console.log(text);

// Generate series 1, 3, 5, 7, 9, 11....up until the nth term
let n = 5 ;
let a  = 1 ;
while ( n >= 1) {
   console.log(a)
   a += 2 
   n--    
}

//Qn 1 : Power Series

function printSeries(n) {
    let i = 1;
    
    while (i <= n) {
        console.log (i * i);
        i++;
    }
    
}printSeries(5)

//Qn 2 : Numbers in between two numbers
function printBetween2Nums(a, b) {
    let i = a;
    while (i <= b) {
        console.log(i);
        i++;
    }
}printBetween2Nums(5,8);

//Qn 3 : Reverse 

function nReverse(n) {
    let i = n;
    while (i >= 1) {
       console.log(i);
       i--;
    }
    
}nReverse(5)