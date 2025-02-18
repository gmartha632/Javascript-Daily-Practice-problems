// Insertion sort
function insertionSort(arr) {
    if(arr.length == 1) {
        console.log(arr[0]);
    }
    
    for(let j = 1; j < arr.length; j++) {
        
        let k = arr[j];
        
        let i = j - 1;
        while (k < arr [i] && i >= 0) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = k;
        console.log(arr.join(" "));
    }

}insertionSort([1,4,3,5,6,2])




//
function compressString(input) {
    let compressed = "";
    let count = 1;

    for (let i = 1; i <= input.length; i++) {
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            compressed += input[i - 1] + count;
            count = 1;
        }
    }

    let output =  compressed.length < input.length ? compressed : input;
    console.log(output);
}	
compressString("aabcccccaaa")
compressString("abcdef")



//Matrix Addtion 
function matrixAddition(matrixA, matrixB) {
    // Validating the arguments
    if(matrixA == null || matrixB == null) {
        console.log("Invalid Arguments");
        return;
    }

    if(matrixA.length != matrixB.length) {
        console.log("Invalid Arguments");
        return;
    }

    for(let i = 0; i < matrixA.length; i++) {
        if(matrixA[i].length != matrixB[i].length) {
            console.log("Invalid Arguments");
            return;
        }
    }


    // Perform Matrix Addition
    let result = [];
    for(let i = 0; i < matrixA.length; i++) {
        let row = [];
        for(let j = 0; j < matrixA[i].length; j++) {
            let result = matrixA[i][j] + matrixB[i][j];
            row.push(result);
        }

        result.push(row);
       
    }

    printMatrix(result);
}

function printMatrix(mat) {
    for(let i = 0; i < mat.length; i++) {
        console.log(mat[i].join(" "));
    }
}matrixAddition([[1, 2]],[1])
matrixAddition([[1,2],[3,4]],[[5,6],[7,8]]);
