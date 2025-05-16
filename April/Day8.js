// Maximum sum of three numbers in an array
function maxSumOfThree(arr){
    let highestSum = -Infinity
    let currentSum 

    for(let i = 0 ; i <= arr.length -3 ;i++){
     currentSum = 0

     for(let j = i ; j < i+3 ;j++){
        currentSum += arr[j]
     }
     highestSum =Math.max(highestSum,currentSum)

    }
    console.log(highestSum)
}maxSumOfThree([1,2,65,7,2,3,45,7,8,5,34,9])    // Output 74


// An optimal approach for maximum sum of three numbers in an array
function maxSumOfThree(arr) {
    if (arr.length < 3) return null;

    let currentSum = arr[0] + arr[1] + arr[2];
    let highestSum = currentSum;

    for (let i = 3; i < arr.length; i++) {
        currentSum = currentSum - arr[i - 3] + arr[i];
        highestSum = Math.max(highestSum, currentSum);
    }

    console.log(highestSum);
}maxSumOfThree([1, 2, 65, 7, 2, 3, 45, 7, 8, 5, 34, 9]);


//Return

let str = "hello world  muthu";
let capitalizedStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizedStr); // Output: "Hello World"



