// Sorting via Bubble sort
function sorting(a) {
    let swapped = true;

    while(swapped) {
        swapped = false;
        for(let i = 0; i < a.length - 1;i++) {
            if(a[i + 1] < a[i]) {
                let t = a[i + 1];
                a[i + 1] = a[i];
                a[i] = t;
                swapped = true;
            }
        }
    }
    console.log(printArrayInALine (a));

}sorting([1,5,4,2,3])

function printArrayInALine(arr) {
    if(arr == null || arr.length == 0) {
        return ("");
    }

    let str = "";
    for(let i = 0; i < arr.length; i++) {
        if(str == "") {
            str += arr[i];

        }
        else {
            str += " " + arr[i];
        }
    }
    return str;
}
 
//Remove Duplicates

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    console.log(uniqueArray.join(" "));
}removeDuplicates([1, 2, 2, 3, 4, 4, 5])



//Multiplication Matrix
function matrixMultiplication(matrixA, matrixB) {
    // Validating the arguments
    if(matrixA == null || matrixB == null) {
       console.log("Invalid Arguments");
       return;
   }


   let rowsA = matrixA.length, colsA = matrixA[0].length;
   let rowsB = matrixB.length, colsB = matrixB[0].length;

   if (colsA !== rowsB) {
       console.log("Invalid Arguments");
       return;
   }

   let result = [];
   for (let i = 0; i < rowsA; i++) {
       let row = [];
       for (let j = 0; j < colsB; j++) {
           row.push(0); 
       }
       result.push(row);
   }

   for (let i = 0; i < rowsA; i++) {
       for (let j = 0; j < colsB; j++) {
           for (let k = 0; k < colsA; k++) {
               result[i][j] += matrixA[i][k] * matrixB[k][j];
           }
       }
   }

   result.forEach(row => console.log(row.join(" ")));
}matrixMultiplication(
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
)

	
matrixMultiplication(
    [[2, 4, 1], [6, 3, 5]],
    [[1, 2], [3, 4], [5, 6]])



//My solution for Removing Duplicates
function removeDuplicates(arr) {
    // Enter your code here and print the elements
       let result = [] ;
    for(let i = 0 ; i < arr.length ;i++  ){
        if(!linearSearch(result , arr[i]) ){
            result[result.length] = arr[i] ;
        }
        
    }
    console.log(result.join(" ")) ;
}

function linearSearch(arr, target){
    for(let i= 0 ; i < arr.length ; i++){
        if(arr[i] == target ){
            return true ;
        }
    }
    return false ;
}


//My solution for Matrix-Multiplication
function matrixMultiplication(matrixA, matrixB) {
    if(matrixA == null  || matrixB == null ){
        console.log("Invalid Arguments") ;
        return ;
    }
    
    for(let i = 0 ; i < matrixA.length ; i++){
        if(matrixA[i].length != matrixB.length ){
               console.log("Invalid Arguments");
               return ;
           }
    }
    
    let result = [] ;
    
    for(let i = 0 ; i < matrixA.length ; i++){
        let row =  [] ;
        for(j = 0 ; j < matrixB[0].length ; j++){
            let sum = 0 ;
            for(let k = 0 ; k < matrixA[0].length ; k++){
               sum += matrixA[i][k] * matrixB[k][j] ;
               
               
            } 
            row.push(sum);
        }
        
        result.push(row);
    }
    PrintArray(result) ;
}


function PrintArray(arr){
for(let i = 0 ; i < arr.length ; i++){
   console.log(arr[i].join(" "));
}
}