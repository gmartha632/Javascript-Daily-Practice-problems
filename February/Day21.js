// Optimized javaScript implementation
// of Bubble sort
function bubbleSort(arr, n){
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }

    console.log(arr)
}



// Driver program
var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);




//Recursive bubblesort

function BubbleSort(arr, n) 
{ 

	// Base case 
	if (n == 1) 
		return; 

	var count = 0; 
	// One pass of bubble 
	// sort. After this pass, 
	// the largest element 
	// is moved (or bubbled) 
	// to end. 
	
	for (var i = 0; i < n - 1; i++) 
		if (arr[i] > arr[i + 1]) 
		{ 
		
			// swap arr[i], arr[i+1] 
			var temp = arr[i]; 
			arr[i] = arr[i + 1]; 
			arr[i + 1] = temp; 
			count++; 
		} 

	// Check if any recursion happens or not 
	// If any recursion is not happen then return 
	if (count == 0) 
		return; 

	// Largest element is fixed, 
	// recur for remaining array 
	BubbleSort(arr, n - 1);
    
    console.log(arr);
} 
BubbleSort( [ 64, 34, 25, 12, 22, 11, 90 ] ,arr.length)




//Selection Sort

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
    
        // Assume the current position holds
        // the minimum element
        let min_idx = i;
        
        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
            
                // Update min_idx if a smaller element is found
                min_idx = j;
            }
        }
        
        // Move minimum element to its
        // correct position
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }

    console.log(arr)
}

selectionSort([64, 25, 12, 22, 11]);




	



