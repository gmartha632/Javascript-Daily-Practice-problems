// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {

    let start = 0, end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor((start + end) / 2);

        // If element is present at 
        // mid, return True
        if (arr[mid] === x) return true;

        // Else look in left or 
        // right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return false;
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (iterativeFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}

x = 8;

if (iterativeFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}


//Binary search debugging in moodle
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {  
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return false;  
  }

//The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
  let language = "JavaScript";
  let text = "";
  for (let x of language) {
  text += x;
  console.log(text)
  }


// Count Distinct Vowels
function countDistinctVowels(str) {
    const vowels = "aeiou";
    let distinctVowels = "";
  
    for (let char of str) {
      if (vowels.includes(char) && !distinctVowels.includes(char)) {
        distinctVowels += char;
      }
    }
  
    console.log(distinctVowels.length);
  }countDistinctVowels("Coolie");

  // Reoccurence of value in array

function Reoccurence(arr,value){
    let count = 0;
    for(let char of arr){
      if(char == value){
        count++
      }
    }
    console.log( `Reoccurence count = ${count}`)
  }Reoccurence([3,4,3,2,1],3)
  
  //Date
  let date = "Jan-31-2024"
  let dat = "Jan-01-2025"
  if(date < dat){
    console.log("true")
  }
  else{
    console.log("false")
  }