//Bubble sort
function sorting(a) {
    // Sorting via Bubble sort
    let swapped = true;
    console.log(printArrayInALine (a));

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
        console.log(printArrayInALine (a));

    }


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


// Bubble Sort
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
    console.log(arr.join(" "));
}bblSort([ 64, 34, 25, 12, 22, 11, 90 ])






//Duplicates in an array
function Duplicates(arr){
            res = []
    for(let i = 0 ; i < arr.length ; i++ ){


        if(!linearSearch(res ,arr[i])){
            res[res.length] = arr[i]  // Is same as res.push(arr[i])
        }
    }
    console.log(res)
}
Duplicates([3, 4, 1, 5, 1, 9, 3])


//Linear search Algorithm
function linearSearch(arr , target){
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] == target){
        return true;
        }
     
    }
    return false
}




function SetUnion(arr1,arr2){

    res = []
    for(let i = 0 ; i < arr1.length ; i++ ){
       res[res.length] = arr1[i]
    }
    for(let j = 0 ; j < arr2.length ; j++ ){
        
        if(!linearSearch(res, arr2[j])){
            res[res.length] = arr2[j]
        }
     }
    console.log(res)
}SetUnion([3, 1, 5, 7, 8],[5, 1, 8, 10, 11])










