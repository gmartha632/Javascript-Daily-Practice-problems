//
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
  }calculateTotalBill([350, 150, 100])

