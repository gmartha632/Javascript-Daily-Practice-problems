// Pattern  reverse
function pattern(n) {
    
  for (let i = n; i >= 1; i--) {
    let star = "";
    let gap = "";
    for (let k = 1; k <= i; k++) {
        star += "*";
    //   star += i + " ";
    }
    for (let j = 1; j <= n - i; j++) {
      gap += " ";
    }
    console.log(gap + star);
  }
}
pattern(3);





// // let n = 100 ;
// for(let i = 1 ; i<= n ; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("Fizzbuzz")
//     }
//     else if(i% 3 == 0 ){
//         console.log("Fizz")
        
//     }
//     else if(i% 5 == 0 ){
//         console.log("Buzz")
        
//     }
//     else {
//         console.log(i)
//     }
// }

// gcd
function gcd(m,n){
    while(n !== 0){
        let temp = n ;
        n = m % n
        m =temp ;
    }
    return m
}
// lcm
function lcm(m,n){
    let a = m*n/gcd(m,n)
    console.log(a)
}lcm(12,24)

//star
function Nstar(n){
    for(let i= 1 ; i <= n ;i++){
        let str =""
       
        for(let j =1 ;j <= i ;j++){
            str += "*"
        }
        console.log(str)
    }
}Nstar(3)

//triangle
function triangle(n){
    for(let i= 1 ;i <= n ;i++){
        let str =""
        let gap =""
       
        for(let j =1 ;j <= i ;j++){
            str += "* "
        }
        for(let k =1 ;k <= n -i  ;k++){
            gap += " "
        }
        console.log(gap+str)
    }
}triangle(3)

//n number and line star
function star(n){
    for(let i= 0 ;i <= n ;i++){
        let str =""
       
        for(let j =1 ;j <= n ;j++){
            str += "*"
        }
        console.log(str)
    }
}star(3)
//number triangle
function nTri(n){
    for(let i= 0 ;i <= n ;i++){
        let str =""
        let gap = ""
       
        for(let j =1 ;j <= i ;j++){
            str += i+" "
        }
        for(let k = 1 ; k<= n-i ; k++){
            gap += " "
        }
        console.log(gap+str)
    }
}nTri(3)


// Descending num triangle 
function dec(n){
    for(let i= n ; i >= 1   ;i--){
         num = ""
         gap =""
         for(let k = i ; k >= 1 ; k-- ){
            num += k +" "
        }
        for(let j = 1 ; j <= n - i ;j++ ){
            gap+= " "
        }
        console.log( gap+num)
    }
}dec(3)

//Descending same num triangle 
function Ndec(n){
    for(let i= n ; i >= 1   ;i--){
         num = ""
         gap =""
         for(let k = i ; k >= 1 ; k-- ){
            num += i +" "
        }
        for(let j = 1 ; j <= n-i ;j++ ){
            gap+= " "
        }
        console.log( gap+num)
    }
}Ndec(3)


//Hallow box
function hallowSquare(n){

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += i + ' ';
        } else {
            row += '  ';  // Two spaces
        }
    }
    console.log(row);
}
}hallowSquare(4) 


// Diamond pattern

function Diamond(n){
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';  // Add spaces
    }
    for (let j = 1; j <= i; j++) {
        row += i + ' ';  // Add numbers
    }
    console.log(row);
}


for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';  // Add spaces
    }
    for (let j = 1; j <= i; j++) {
        row += i + ' ';  // Add numbers
    }
    console.log(row);
}
}Diamond(3)

// Right-angled triangle pattern 
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) { 
            row += '*';
        }
        console.log(row);
    }
}printTriangle(5);

// Hollow square
function printHollowSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j == 1 || j == n) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}printHollowSquare(4);


 // diamond
 function diamond(n){
    for(let i = 1 ; i <= n ; i++){
        num = ""
        gap = ""
        for(let j = 1 ; j <= n-i ; j++){
            gap+= " "
        }
        for(let k = 1 ; k <= i ; k++ ){
            num += k + " "
        }
        console.log(gap+num)
    }
    for(let i = n-1 ; i >= 1 ; i--){
        num = ""
        gap = ""
        for(let j = 1 ; j <= n-i ; j++){
            gap+= " "
        }
        for(let k = 1; k <= i ; k++ ){
            num += k + " "
        }
        console.log(gap+num)
    }

}diamond(3)

// sum of n factorial

function factorial(n){
    let fact = 1 
    for(let i = 1 ; i <= n ; i++){
        fact *= i
    }
    return fact
}

function SumFact(n){
    let str = 0 ;
    for(let i = 1 ;i <= n ; i++){
        str += factorial(i)
    }
    console.log(`Sum of factorial :${str}`)
} SumFact(5)

// sum of prime numbers in range
function isPrime(n){
    if(n <= 1) return false 
    for(let i = 2 ; i <= Math.sqrt(n);i++){
        if(n % i == 0) return false
    }
     return true ;
}

function PrimeRange(m,n){
    let primes = []
    for(let i = m ; i <= n ;i++){
        if(isPrime(i)){
         primes.push(i)   
        }
    }
    let sum = 0
    for( item of primes){
        sum += item
    }
    console.log( `sum of primes in range :${sum}`)
}
 PrimeRange(10,30) ;

