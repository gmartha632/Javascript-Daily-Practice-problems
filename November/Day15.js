// find the sum of digits of a number until the sum becomes a single digit

function addDigitsToSingle (n) {
   
    let num = n; 
    
    // Doing this only if the number is greater than or equal 10
    // Otherwise the number is single digit
    while (num >= 10) { 

        let sum = 0;
        while ( num > 0) {
            let digit = num % 10;
            sum += digit;
            num = Math.trunc(num / 10); 
        }

        num = sum;// Taking the num as sum
       
        

    }

    console.log(num); 

}addDigitsToSingle(78945623)


// printStarHashAlter pattern;
function printStarHashAlter(n) {
    for(let i = 1; i <= n; i++) {
        let output = getSpaces(n - i);
        let pattern = getCharSequence(i);
        console.log(output + pattern);

    }

    // Reverse print
    for(let i = n - 1; i >=1; i--) {
        let output = getSpaces(n - i);
        let pattern = getCharSequence(i);
        console.log(output + pattern);
    }

}

function getSpaces(n) {
    let outputStr = "";
    for(let i = 1; i <= n; i++) {
        outputStr += " ";
    }
    return outputStr;
}

function getCharSequence(n) {
    let outputStr = "";
    let char = "";
    if(n % 2 == 0) {
        char = "#";
    }
    else {
        char="*";
    }
    for(let i = 1; i <= n; i++) {

            outputStr += char + " ";
    }
    return outputStr;
}printStarHashAlter(4);


// Sum Primenumber in array

function isArraySumPrime(arr) {
    let sum = 0;

    // Finding the sum of the array
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if(isPrime(sum)) {
        console.log("YES : sum is prime");
    }
    else {
        console.log("NO : sum is not prime");
    }
}

function isPrime (n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i<=Math.sqrt(n); i++) {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}	
isArraySumPrime([1, 2, 4])
isArraySumPrime([3, 5, 7, 11])