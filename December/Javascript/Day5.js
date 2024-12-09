// Selection sort 

function  OrderedArray(arr){

    for(let i = 0 ; i <= arr.length - 1 ; i++){
        minIdx = i 

        for(let j = i+1 ; j < arr.length ; j++  ){
            if(arr[j] < arr[minIdx]){
                minIdx = j 
            }
            else return
        }
        if(minIdx != j){
            arr[i] , arr[minIdx] = arr[minIdx] , arr[i]
        }
        else break ;
        a
    console.log(arr);
    }

}OrderedArray( [13, 89, 15, 28, 1, 7])

// let a = 5
// console.log(a);


let sum = 0 ;
let i = 1
while(i <= 5){
    sum += i
    i++
}
console.log(sum);


