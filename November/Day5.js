//  If a Number is power of 3 or not

function ispower(n) {
  for (let i = 1; i <= 20; i++) {
    let a = 3 ** i;
    if (n !== a) {
      console.log("No");
    } else if (n == a) {
      console.log("Yes");
      break;
    }
  }
}
ispower(81);

//Pattern printing

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let char = "";
    let str = "";
    for (let j = 1; j <= n; j++) {
      if (i % 2 == 0) {
        char += "#";
      } else {
        char += "*";
      }
    }
    console.log(char);
  }
}
pattern(4);

//Is a number power of 3 or not

let b = 81;
let a = 3;

// computing power
let p = Math.log10(b) / Math.log10(a);

// checking to see if power is an integer or not
if (p - Math.floor(p) == 0) {
  console.log("YES");
} else console.log("NO");


//Square root of a number

function sqrt(n) {
  if (n < 2) {
    return n;
  }
  let low = 1, high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
 
let n = 64;
console.log(sqrt(n));








                               

