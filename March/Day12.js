//Dayof the programmer

function dayOfProgrammer(year) {
  if (year == 1918) {
    console.log(`26.09.${year}`);
  } else if (isLeapYear(year) || year % 4 == 0) {
    console.log(`12.09.${year}`);
  } else {
    console.log(`13.09.${year}`);
  }
}
dayOfProgrammer(2017);
dayOfProgrammer(2016);

function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
}

//Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
  }
  console.log(count);
}
divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]);


//Missing Numbers

function missingNumbers(arr , brr){
    let ar = {};
let br = {};
let res =[];
for(let i of arr){
    ar[i] = (ar[i] || 0) + 1;
}
for(let j of brr){
    br[j] = (br[j] || 0) + 1;
}
for(let key in br){
    if(!ar[key]){
        res.push(key)
    }
    else if(ar[key] !== br[key]){
         res.push(key)
    }
}
return res;
}
console.log(missingNumbers([7,2,5,3,5,3] , [7,2,5,4,6,3,5,3]))


