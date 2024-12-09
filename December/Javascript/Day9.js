// Creating the bblSort function
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}
// Now pass this array to the bblSort() function
bblSort( [234, 43, 55, 63, 5, 6, 235, 547]);
bblSort(["Saab", "Volvo", "BMW"]) ;




// BubbleSort function for array of objects
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j]["name"] > arr[j + 1]["name"]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}
let students = [{
    "name" : "Muthu",
    "age" : 21 ,
    "mark" : 90
},
{
    "name" : "Naveen",
    "age" : 20 ,
    "mark" : 95
},
{
    "name" : "Karthi",
    "age" : 17 ,
    "mark" : 96
},   
{
    "name" : "Jeeva",
    "age" : 20,
    "mark" : 98
},
{
    "name" : "Pranesh",
    "age" : 20 ,
    "mark" : 99
},]

bblSort(students);





//Selection sort
function selectionSort(arr) {
    let minIdx = -Infinity;
    printArray(arr, arr.length);
    for(let i = 0; i < arr.length - 1; i++) {
        minIdx = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
        printArray(arr, arr.length);
               
    }
}selectionSort([4,5,1,3,7])
// Function to print an array 
function printArray(arr, size){
    let i;
    let outputStr = "";

    for (i = 0; i < size; i++) {
        if(outputStr === "") {
            outputStr += arr[i];
        }
        else {
            outputStr += " " + arr[i];
        }
    }
    console.log(outputStr);
  }



  
  
  //Linear search Algorithm
  function linearSearch(arr , target){
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] == target){
        return i;
        }
     
    }
        return false
    
    
}console.log(linearSearch( [10, 8, 30, 4, 5, 3] , 30));




const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.firstName);
    }
  };


