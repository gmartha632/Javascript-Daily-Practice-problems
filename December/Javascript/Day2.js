// You need to calculate the total amount earned by an Ola cabs owner based on the distance travelled by his vehicles..
// You are given an array where each entry contains:
// The type of cab
// The number of kilometers traveled, separated by a space
// Rates for each cab type:
// Mini: ₹15 per kilometer
// Micro: ₹10 per kilometer
// Prime: ₹20 per kilometer
// Example Input:
// ["mini 20", "micro 4", "prime 20"]
// Calculation:
// Mini: 20 × ₹15 = ₹300
// Micro: 4 × ₹10 = ₹40
// Prime: 20 × ₹20 = ₹400
// Total Fare: ₹300 + ₹40 + ₹400 = ₹680
// Write a program that takes the input array and calculates the total amount earned.


function calculateAmountEarned(trips) {
    // write your code here..
    
     let total = 0 ;
      
     for( let char of trips ) {
         let [cab , rate ] = char.split(" ");
         rate = parseInt(rate) ;
         
         if(cab === "mini"){
             total += rate *15 ;
         } 
         else if(cab === "micro"){
             total += rate * 10 ;
         }
         else if(cab === "prime"){
             total += rate * 20 ;
         }
     } 
    console.log(total);
   }calculateAmountEarned(["mini 20", "micro 4", "prime 20"])

//  Check if an array has an odd number of odd numbers.
 
// Print YES if it has,  else print NO.

function hasOddCountOfOddNumbers(arr) {
    //write your code here...
    let count = 0 ;
    
    for(let num of arr){
      
       
         if( num % 2 !== 0 ) count++;
        
        
    }
    
    if(count % 2 == 0) console.log("NO");
    else if(count % 2 !== 0) console.log("YES");
    

}hasOddCountOfOddNumbers([2, 4, 6, 8, 10]);

// Print the string which appears alphabetically first in the given array of strings.
// Print array is empty If the array doesn't have any elements

function findAlphabeticallyFirst(strings) {
    // write your code here..
    if(strings.length == 0){ 
         console.log("array is empty") ;
         
     }
    else if(strings.length !== 0){
     let min = strings[0] ;
    for(let  i = 0 ; i < strings.length ; i++){
         
          if(strings[i] < min){
             min = strings[i];
         }
          
     }
     console.log(min);
    }
}findAlphabeticallyFirst(["apple", "banana", "cherry", "apricot"]);

// / Online Java Compiler
// // Use this editor to write, compile and run your Java code online
// class Main {
//     public static void main(String[] args) {
//         int col = 5;
//         int space = 2 * (col - 1);
//         for(int  i = 1; i<=col; i++){
//             for(int j = 1; j<=i; j++){
//                 System.out.print("*");
//             }
//             for(int t = 1; t<=space; t++){
//                 System.out.print(" ");
//             }
//             for(int j = 1; j<=i; j++){
//                 System.out.print("*");
//             }
//             space = space - 2;
//             System.out.print("\n");
//         }
//     }
// }