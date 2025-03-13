//Subbarray division sum 


function birthday(s, d, m) {
    let count = 0
    for(let i = 0 ; i < s.length ; i++){
        let sum = 0
         for(let j = i ; j < m+i ; j++ ){
            sum += s[j]   
        }
        
        if(sum == d){
            count++
        }
    }
    
   console.log(count) 
    
    

}birthday([2,2,1,3,2],4,2)  //Result 2 since  in this array [2,2] and [1,3] are the two segments meeting her criteria





//Missing Number sum

function missingNumber(arr,brr){
    let res=[]
    for(let i = 0 ; i < brr.length ; i++){
        let val = brr[i]
        if(!islinearSearch(arr,brr[i]) || frequency(arr ,val) != frequency(brr,val) ){
             if(!islinearSearch(res,brr[i])){
                     res[res.length] = brr[i]
             }
        }
    }
    
    let output = bubbleSort(res)
    console.log(output)
}missingNumber([7,2,5,3,5,3],[7,2,5,4,6,3,5,3])

missingNumber([2,3,5,7,3,5,4],[3,4,5,3,3,2,2,4,7,8])


function islinearSearch(arr, target){
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == target){
            return true
        }
    }
}

function frequency(arr , val){
    let count = 0
    for(let i = 0 ; i < arr.length  ; i++){
        
        if(arr[i] == val){
            count++
        }
    }
    
    return count
}

function bubbleSort(arr){
    
    for(let i= 0 ; i  < arr.length -1 ; i++){
        for(let j= 0 ; j < arr.length ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] =arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    
    return arr
}




//Super Reduced string

