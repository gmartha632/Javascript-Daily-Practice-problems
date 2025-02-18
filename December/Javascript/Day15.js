//Selection sort
function SelectionSort(arr) {
      for (let i = 0; i < arr.length; i++) {
            curIdx = i
            for (let j = 0; j < arr.length; j++) {
                  if (arr[j] > arr[curIdx]) {
                        curIdx = j

                  }
                  let temp = arr[curIdx]
                  arr[curIdx] = arr[i]
                  arr[i] = temp
            }
           
      }
      console.log(arr)
} SelectionSort([234, 43, 55, 63, 5, 6, 235, 547])
SelectionSort(["Saab", "Volvo", "BMW"])


// Selection sort for Objects

function SelectionSorting(arr, key) {
      for (let i = 0; i < arr.length - 1; i++) {
            curIdx = i
            for (let j = i + 1; j < arr.length; j++) {
                  if (arr[j][key] < arr[curIdx][key]) {
                        curIdx = j

                  }
            }
            if (curIdx != i) {
                  let temp = arr[curIdx]
                  arr[curIdx] = arr[i]
                  arr[i] = temp
            }

      }
      console.log(arr)
}



let Employees = [
      { "name": "Muthu", "age": "22", "salary": "20000", "field": "Dev" },
      { "name": "Naveen", "age": "25", "salary": "40000", "field": "Automation" },
      { "name": "Vignesh", "age": "24", "salary": "50000", "field": "Dev" },

]

SelectionSorting(Employees, "salary")


