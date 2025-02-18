//Linear search Algorithm
function linearSearch(arr , target){
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] == target){
        return true;
        }
     
    }
    return false
}



//Set Union
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

//SetIntersection
function SetIntersection(arr1,arr2){
    let res = []
    let output = []
    for(let i = 0 ; i < arr1.length ; i++ ){
        res[res.length] = arr1[i]
    }

    for(let j = 0 ; j < arr2.length ; j++){
        if(linearSearch(res,arr2[j])){
            output[output.length] = arr2[j]
        }
    }
    // console.log( "Intersection : " + output)
    console.log(output)
    
}SetIntersection([3, 1, 5, 7, 8],[5, 1, 8, 10, 11])

