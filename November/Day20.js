// Largest numbers occuring count

function LargestNum(arr) {
    let max = arr[0];
  
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
function MaxOccurrence(arr){
    let occ = LargestNum(arr);
    let count = 0
     for(let i = 0 ; i <= arr.length ; i++ ){
       if(arr[i] == occ)
        count++
     }
     console.log(`No of occurences  = ${count}`)
  }MaxOccurrence([2, 3, 5, 30, 11, 30, 11, 30]);
  MaxOccurrence([3,2,1,3]);