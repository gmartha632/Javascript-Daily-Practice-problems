//2. Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.

//Example Input: ([5, 2, 3, 5, 7,5 , 8], 5)
//Example Output: { firstIndex: 0, lastIndex: 5 }

function firstlastIndex(arr, targert) {
       let firstindex =""
    for (let i = 0; i < arr.length; i++) {
        if (targert == arr[i]) {
            firstindex = i
            break;
        }
    }
    let lastindex = "";
    for (let i = 0; i < arr.length; i++) {
        if (targert == arr[i]) {
            lastindex = i
        }
    }

    console.log(`{firstindex : ${firstindex}, Lastindex : ${lastindex}}`)

} firstlastIndex([5, 2, 3, 5, 7, 5, 8], 5)

//Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.

function max(arr){
    let target = arr[0];
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i] > target){
            target = arr[i]
        }
    }
    return target
}

function firstMaxIndex(arr){

    for(let i = 0  ;i < arr.length ;i++){
        if(arr[i] === max(arr)){
         console.log(i)
         break ;
        }
    }
}firstMaxIndex([4, 4, 1, 5, 5, 3])


//3. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”


let s = 'hello everyone'
let a = s.split(" ")
let b = ""
for (let i = a.length - 1; i >= 0; i--) {
    b += a[i] + " ";
}
console.log(b.slice(0, b.length - 1)) ;



// Given an array find all the values less than 15 in a new array if not print No Element less than 15.
//   Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15


function LessThan(arr){
    let newarray = []

    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i] < 15){
            newarray.push(arr[i]);
        }
    }
    let output = newarray.length >= 0 ? newarray.join(",") : ""  ;
    console.log(output)
}  LessThan([4, 15, 8, 25, 30])

//Pattern 

// function pattern(n){
//     for(let i = 1 ; i <= n ; i++){
//         num = ""
//         gap = ""
//         res = ""
//         for(let j = n - i ;  j <= i ; j--){
//             gap += ""


//         }
//         for(let k = n ;  k <= i ; k++){
//             num += i
//         }
//         res = gap+num
//         console.log(res)
//     }
// }pattern(3)
function pattern(n) {
    for (let i = n; i >= 1; i--) {
      let gap = "";
      let star = "";
      let res = "";
  
      for (let j = 0; j < n - i; j++) {
        gap += " ";
      }
      for (let k = 1; k <= i; k++) {
        star += i;}
      res = star+gap+gap+ star;
      console.log(res);
    }
  }
  pattern(5);

  //

  function prime(n){
    if(n <= 1) return false
    for(let i = 2 ; i < Math.sqrt(n) ; i++){
        if(n %i === 0) return false
    }

    return true
  }
  

  function numOfPrimes(arr){
      let count = 0 
       
      for(let i = 0 ; i < arr.length ;i++){
        if (prime(arr[i]) === true){
            count++
        }
      }

      console.log(count)

  }numOfPrimes([1,2,3,4,5,7])

 


