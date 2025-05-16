// Sales by Match Implementation

function sockMerchant(n, ar) {
  let countMap = {};
  for (let i = 0; i < n; i++) {
    // Constructing the countMap
    if (countMap[ar[i]]) {
      countMap[ar[i]] = countMap[ar[i]] + 1;
    } else {
      countMap[ar[i]] = 1;
    }
  }
console.log(countMap)
  // Calculating total pairs of socks in stock
  let count = 0;
  for (let k in countMap) {
    let a = Math.floor(countMap[k] / 2);
    count += a;
  }

  console.log(`Total pairs of Socks in stock ${count}`);
}
sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);



