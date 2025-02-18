//Merge Sort for two sorted array

// Merge ar1[0..n1-1] and ar2[0..n2-1] into ar3
function mergeArrays(ar1, ar2) {
    let i = 0, j = 0, k = 0;
    const n1 = ar1.length;
    const n2 = ar2.length;
    const ar3 = [];

    while (i < n1 && j < n2) {
    
        // Pick smaller of the two current elements and move ahead in the array of the picked element
        if (ar1[i] < ar2[j])
            ar3[k++] = ar1[i++];
        else
            ar3[k++] = ar2[j++];
    }

    // if there are remaining elements of the first array, move them
    while (i < n1)
        ar3[k++] = ar1[i++];

    // Else if there are remaining elements of the second array, move them
    while (j < n2)
        ar3[k++] = ar2[j++];

    return ar3;
}

// Driver code
const ar1 = [1, 3, 5, 7];
const ar2 = [2, 4, 6, 8];
const ar3 = mergeArrays(ar1, ar2);

console.log(ar3.join(" "));

