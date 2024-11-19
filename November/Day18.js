//L4 Trace-table   

function printStar(n) {
  for (let i = 1; i <= n; i++) {
    let output = getSpaces(n - i);
    let pattern = getNumSequence(i);
    console.log(output + pattern);
  }

  // Reverse print
  for (let i = n - 1; i >= 1; i--) {
    let output = getSpaces(n - i);
    let pattern = getNumSequence(i);
    console.log(output + pattern);
  }
}printStar(3)

function getSpaces(n) {
  let outputStr = "";
  for (let i = 1; i <= n; i++) {
    outputStr += " ";
  }
  return outputStr;
}

function getNumSequence(n) {
  let outputStr = "";
  for (let i = 1; i <= n; i++) {
    outputStr += i + " ";
  }
  return outputStr;
}


//Calculate Total
function calculateTotal(cart) {
    let total = 0;
  
    // Loop through each item in the cart
    for (let item of cart) {
      let [code, quantity] = item.split(" ");
      // quantity = parseInt(quantity, 10);  // Convert quantity to a number
  
      // Check the code and calculate the total based on the item
      if (code === "M") {
        total += 500 * quantity;  // Mug
      } else if (code === "J") {
        total += 3000 * quantity; // Jeans
      } else if (code === "T") {
        total += 1500 * quantity; // T-shirt
      } else if (code === "P") {
        total += 10 * quantity;   // Pen
      }
    }
  
    console.log(total);
  }calculateTotal(["M 3","T 4"])


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


 



  
 
