// Factorial sum
let a ;
function factorial(n) {
 if (n <= 1) {
    return 1
 }
 else {

   a = n*factorial(n-1)
 }

  }
  
 a = factorial(5);
console.log(a)


function twoSum(nums, target) {
  let i = 0 
  let j = nums.length -1 
  
  while(i < j){
      let sum = nums[i] + nums[j]

      if(sum == target){
          return [i,j]

      }

      else if(sum > target){
          j--
      }
      
      else if( sum < target ) {
          i++
      }
      

  }
  

  
}console.log(twoSum([2,7,11,15],9))
