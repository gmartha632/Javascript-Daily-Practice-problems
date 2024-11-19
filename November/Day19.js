//split method
let item = "M 5";
let [code, quantity] = item.split(" ");
console.log([code, quantity]);

//parseInt   : parseInt(Value, radix);
//The method takes two parameters: the string to be parsed and the radix (optional, default is 10).
// 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.

quantity = parseInt("5", 10);
console.log(quantity);

binary = parseInt("0011", 2);
console.log(binary);

//Calculate Total
function calculateTotal(cart) {
  let total = 0;

  // Loop through each item in the cart
  for (let item of cart) {
    let [code, quantity] = item.split(" ");
    quantity = parseInt(quantity, 10); // Convert quantity to a number

    // Check the code and calculate the total based on the item
    if (code === "M") {
      total += 500 * quantity; // Mug
    } else if (code === "J") {
      total += 3000 * quantity; // Jeans
    } else if (code === "T") {
      total += 1500 * quantity; // T-shirt
    } else if (code === "P") {
      total += 10 * quantity; // Pen
    }
  }

  console.log("Cart Total:" + total);
}
calculateTotal(["M 3", "T 4"]);

//Largest number in an array
function LargestNum(arr) {
  let max = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Laregst num:" + max);
}
LargestNum([2, 3, 5, 7, 11, 3, 45, 30]);

//Smallest number in an array
function SmallestNum(arr) {
  let min = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Smallest num:" + min);
}
SmallestNum([2, 3, 5, 7, 11, 3, 45, 30]);

// Accessing lexicographically largest 

function alpha(first){
  let min = first[0]
for (let i = 0; i < first.length; i++) {
   if(first[i] < min){
    min = first[i]
   }
  
}
console.log(min)
}alpha(["banana", "apple", "grape", "cherry"]);



// Local compare in javascript

const string1 = "hello";
const string2 = "world";

const compareValue = string1.localeCompare(string2);
// console.log(compareValue)

if(string1 > string2){
  console.log(string1)
}
else{
  console.log(string2)
}


