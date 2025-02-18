
//BubbleSort
function bubbleSort(arr){
    
    for(let i = 0 ; i < arr.length ; i++){
        
        for(j = 0 ; j < (arr.length - i- 1) ; j++){
              if(arr[j] > arr[j+1]){
                  let temp = arr[j]
                  arr[j] = arr[j+1]
                  arr[j+1] = temp
              }
        }
    }
    console.log(arr)

}bubbleSort([ 64, 34, 25, 12, 22, 11, 90 ])

//Selection sort
function SelectionSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        curIdx = i
       for(let j = i+1 ; j < arr.length  ; j++){
           if(arr[curIdx] > arr[j]){
               curIdx = j
           }
        
       }
      if(i != curIdx){
         let temp = arr[curIdx]
         arr[curIdx]= arr[i]
         arr[i] = temp
     }
    }
    console.log(arr)

}SelectionSort([64, 25, 12, 22, 11])


//InsertionSort
function Insertionsort(arr){
    for(let i= 1 ; i < arr.length ; i++){
        
        for(let j = i ; j >= 0 ; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j -1]
                arr[j-1] = temp
            }
        }
         console.log(arr)
    }
   
}Insertionsort([1,4,3,5,6,2])




