// You are given an array of numbers. Your task is to print the number with maximum frequency.
// Input Description:
// You are given array of numbers
// Output Description:
// Print the number with maximum frequency. If two number have equal frequency print the number that comes first
// Sample Input :
// 1 4 4 5 2 3 4
// Sample Output :
// 4
// Example 2
// 21 44 44 21 44 21 55
// Output
// 21

//My Solution
function maxFrequency(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
  
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    res.push(`${count}`);
  }

 
  console.log(res);
}
maxFrequency([1, 4, 4, 5, 2, 3, 4]);

//Sandhya's solution
function findMaxFrequency(arr) {
  let countarr=[];
  for(let i=0; i<arr.length; i++){
      let a=0;
      for(let j=0; j<arr.length; j++){
          if(arr[i]===arr[j]){
              a+=1;
          }
      }
      countarr.push(a);
     
  }
  console.log(countarr)
  for(let i=0; i<countarr.length; i++){
      let count=0
      for(let j=0; j<countarr.length; j++){
          if(countarr[i]>=countarr[j]){
              count++
          }
      }
      if(count===countarr.length){
          // console.log(arr[i])
          break;
      }
  }
}findMaxFrequency([1, 4, 4, 5, 2, 3, 4]);


//Pranesh bro's solution
function maxOccurrence(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    let maxCount = 0;
    let maxElement = null;
    for (let key in obj) {
        if (obj[key] > maxCount) {
            maxCount = obj[key];
            maxElement = key;
        }
    }
    console.log(obj)
    return maxElement;
    
}
console.log(maxOccurrence([4, 1, 3, 2, 5, 4, 4]));

//Given a 2D matrix, the task is to find the maximum sum of an hourglass.
// An hour glass is made of 7 cells in the following form.
// A B C
//  D
// E F G
// Input : 5 5
//   0 3 0 0 0
//   0 1 0 0 0
//   1 1 1 0 0
//   0 0 2 4 4
//   0 0 0 2 4
// Output : 11
// Explanation
// Below is the hour glass with
// maximum sum
// 1 0 0
// 4
// 0 2 4

function hourGlass(arr) {}

// Given two string compare if one is a permutation of another
// example str1 = man str2 = nam

// output: true
// example str1=pear str2=reap output true
// example str1=fall str2=faal output false

function permutation(str1, str2) {}

// Given an array of Integers identify the maximum occurring element. Eg:
// [5,5,4,1,1,1,6,7,8], answer is 1

function maximumOccuringElement(arr) {

}

//Merge sort

let a = [3, 5, 8, 11, 13];
let b = [1, 2, 4, 7, 10];
for (let i = 0; i < b.length; i++) {
  let x = b[i];
  let z;
  for (let j = a.length - 1; j >= 0; j--) {
    if (b[i] < a[j]) {
      a[j + 1] = a[j];
      z = j;
    }
  }
  a[z] = x;
}
console.log(a);


