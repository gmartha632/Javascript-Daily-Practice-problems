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

function MaxOccurrence(arr) {
    let occ = LargestNum(arr);
    let count = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == occ)
            count++
    }
    console.log(`No of occurences  = ${count}`)
} MaxOccurrence([2, 3, 5, 30, 11, 30, 11, 30]);
MaxOccurrence([3, 2, 1, 3]);


//pattern printing

function hallowSquare(n) {
    let outputStr = "";
    if (n == 1) {
        console.log(1);
        return;
    }
    for (let i = 1; i <= n; i++) {
        outputStr += "1 "
    }
    console.log(outputStr.trim());

    for (let j = 2; j <= n - 1; j++) {
        let line = "";
        for (let k = 1; k <= n; k++) {
            if (k == 1 || k == n) {
                line += "*" + " ";
            }
            else {
                line += "  ";
            }
        }
        console.log(line.trim());
    }
    outputStr = "";
    for (let i = 1; i <= n; i++) {
        outputStr += n + " ";
    }
    console.log(outputStr.trim());

} hallowSquare(5)


//
let arr = [5, 8, 13, 21];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 13) {
        console.log("Found 13!");  // Loop continues even after finding 13
    break;
    }
}


//Find the maximum in an array
function findMax(arr) {
    let max = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
     console.log(max);
  }findMax( [5, 8, 13, 21]);

  //Finding lexically first string

  function findAlphabeticallyFirst(arr) {
    let first = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < first) {
        first = arr[i];
      }
    }
     console.log(first);
  }findAlphabeticallyFirst(['bat','apple','cat'])


  //Debug Binary search code:
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    

    while (left <= right) {  
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        console.log("Found");
        break;
      } else if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid + 1;
      }
    }
    
    return false;  
  }binarySearch([3,5,6,7,8],5)



  function findMaxSalaryEmployee(data) {

    // Enter your code here
       let max = 0;
       let nam ="";
    for(let item of data){
        let  [name,age,salary] = item.split(",");
        //  salary = parseInt(salary, 10);
        
            if(salary > max){
              max = salary;
               nam = name ;
               }
        
         }
    console.log(nam);

}findMaxSalaryEmployee([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])

// Author's solution
function findMaxSalaryEmployee(data) {
    if (data.length === 0) {
      console.log("");
      return;
    }
  
    // Initialize the first employee as having the maximum salary
    let maxRecord = data[0].split(",");
    let maxName = maxRecord[0];
    let maxSalary = parseFloat(maxRecord[2]);
  
    // Compare the rest of the employees
    for (let i = 1; i < data.length; i++) {
      let record = data[i].split(",");
      let name = record[0];
      let salary = parseFloat(record[2]);
  
      if (salary > maxSalary) {
        maxSalary = salary; // Update max salary
        maxName = name;     // Update max name
      }
    }
  
    console.log(`${maxName}`);
  }findMaxSalaryEmployee([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,12000" ])




