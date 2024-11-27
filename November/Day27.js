//For the first 100 kWh, the rate is ₹8 per kWh.
//For the next 200 kWh (from 101 to 300 kWh), the rate is ₹12 per kWh.
//For any usage above 300 kWh, the rate is ₹15 per kWh.
//First 100 kWh = 100 × ₹8 = ₹800
//Next 200 kWh = 200 × ₹12 = ₹2400
//Remaining 50 kWh = 50 × ₹15 = ₹750
//Total Bill = ₹800 + ₹2400 + ₹750 = 3950
//The program takes an array of usages, the program prints the sum
//example usages = [350, 150, 100];
function calculateBill(usage) {
    let bill = 0;
  
    if (usage <= 100) {
      bill = usage * 8;
    } else if (usage <= 300) {
      bill = 100 * 8 + (usage - 100) * 12;
    } else {
      bill = 100 * 8 + 200 * 12 + (usage - 300) * 15;
    }
    
    return bill;
  }
  
  function calculateTotalBill(usages) {
    let totalBill = 0;
  
    // Calculate the bill for each usage in the array and sum it up
    for (let usage of usages) {
      totalBill += calculateBill(usage);
    }
  
    console.log(totalBill);
  }calculateTotalBill([350, 150, 100]);

// 1. Problem: Given an array of integers, count how many numbers are even and how many are odd.

// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }


function evenOdd(arr){
  let  count = 0
  let  total = 0
  for(let i = 0 ; i< arr.length ;i++){
      if(arr[i] % 2 == 0){
          count++
      }
      else if( arr[i] % 2 !== 0){
          total++
      }
  }
  console.log(`{even:${count} , odd:${total}}`)
}evenOdd([1, 2, 3, 4, 5, 6,7])