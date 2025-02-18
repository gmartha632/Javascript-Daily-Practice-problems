// Creating the bblSort function
function bblSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (let j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                let temp = arr[j]
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
function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (let j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j]["name"] > arr[j + 1]["name"]) {

                // If the condition is true
                // then swap them
                let temp = arr[j]
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

bubbleSort(students);



