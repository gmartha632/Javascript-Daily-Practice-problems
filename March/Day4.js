//Bill division  sum

function BillDivision(bill, k, b) {
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    sum += bill[i];
  }
  let amount = sum - bill[k];
  let split = amount / 2;

  if ((b = split)) {
    console.log("Bon Appetite");
  } else if (b > split) {
    let a = bill - split;
    console.log(a);
  }
}
BillDivision([2, 7, 5], 2, 7);

// Cloud jumping sum
function call(c, k) {
  let i = k;
  let score = 100;
  while (true) {
    if (c[i] === 0) {
      score -= 1;
      if (i === 0) {
        break;
      }
      i += k;
    } else if (c[i] === 1) {
      score -= 3;
      if (i === 0) {
        break;
      }
      i += k;
    }
    if (i >= c.length) {
      i = i % c.length;
    }
  }
  return score;
}
console.log(call([0, 1, 1, 0], 2));
