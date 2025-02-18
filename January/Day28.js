//Fibonacci Series

function fibonacci(n){

    let prev1 = 0 ;
    let prev2 = 1 ;
    let cur =0 ;
    for(let i = 2 ; i < n ;i++ ){
     cur = prev1 + prev2 ;
     prev1 = prev2 ;
     prev2 = cur ;

    }
    if(n ==1 ){
        console.log(0)
    }
    else if(n== 2){
        console.log(1)
    }
    else {
        console.log(cur)
    }
}fibonacci(5);

//Set Union

function SetUnion(arr1,arr2){
      let result = [] ;
      for(let i = 0 ; i < arr2.length ;  i++ ){
        if(linearSearch(arr1,arr2[i])){
            result[result.length] = arr2[i]
        }
      }
      conaole.log
}SetUnion([1,2,3,5,6],[5,6,7,9,12])

function linearSearch(arr, target){
    for(let i =0 ; i< arr.length ;i++){
        if(arr[i] == target){
            return true ;
        }
    }
}