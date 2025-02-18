function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }
        }
    }
    console.log(arr)

} bubbleSort([64, 34, 25, 12, 22, 11, 90])
bubbleSort(["Saab", "Volvo", "BMW"]);

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i

        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[minIdx]) {

                minIdx = j

            }

            if (minIdx != i) {
                let temp = arr[minIdx]
                arr[minIdx] = arr[i]
                arr[i] = temp
            }


        }


    }
    console.log(arr)
} selectionSort(["Saab", "Volvo", "BMW"])
selectionSort([64, 34, 25, 12, 22, 11, 90])



//Duplicates in an array
function Duplicates(arr) {
    res = []
    for (let i = 0; i < arr.length; i++) {
        if (!linearSearch(res, arr[i])) {
            res[res.length] = arr[i]  // Is same as res.push(arr[i])
        }
    }
    console.log(res)
}
Duplicates([3, 4, 1, 5, 1, 9, 3])


//Linear search Algorithm
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return true;
        }

    }
    return  false
}