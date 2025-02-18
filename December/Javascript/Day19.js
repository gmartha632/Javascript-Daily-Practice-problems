function InsertionSort(arr){

    if(arr.length == 0) {
        return
    }
  
    for(let i= 1 ; i < arr.length ; i++){
              Key =  i 
              
              for(let j = Key; j >= 0  ; j-- ){
                
                  if(arr[j] < arr[j-1]){
                    
                    let temp = arr[j-1]
                       arr[j-1] = arr[j]
                       arr[j] = temp
                    
                  }
                
              }
       console.log(arr.join(' '))
      
    }
   
  }InsertionSort([1,4,3,5,6,2])
  // 1 4 3 5 6 2
  // 1 3 4 5 6 2
  // 1 3 4 5 6 2
  // 1 3 4 5 6 2
  // 1 2 3 4 5 6  
  

  

