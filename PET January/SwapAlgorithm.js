//Swap Algorithm
let a = 10 ;
let b = 5 ;

console.log("Value of a :" + a) ;
console.log("Value of b :" +b) ;

temp = a;
a = b;
b = temp;

console.log("Swapped value of a :" + a) ;
console.log("Swapped value of b :" +b) ;

// Swappping without temp (Using destructing assignment)
 // a would be swapped to b and b would be swapped to a
 let c =  30 ;
 let d = 40 ;
 [d, c] = [c, d];

 console.log(`after swap c= ${c}`);
 console.log(`after swap d= ${d}`);


 //Using Airthematic operators 

 let e = 15;
 let f = 25;

 e = e + f ;
 f = e - f ;
 e = e - f ;

 console.log("Swapped value of e : " + e );
 console.log("swapped vaue of f : " + f);


 //Debugging problems
//Last digit of a given number 
let num = 23;
ld = num % 10;
console.log("The last digit of the given number is: " + ld);

//
// let a=10,b=5;
// console.log("Before Swapping");
// console.log("a value is "+a);
// console.log("b value is "+b);
// a=a-b;
// b=a+b;
// a=a+b;
// console.log("After Swapping");
// console.log("a value is "+a);
// console.log("b value is "+b);




