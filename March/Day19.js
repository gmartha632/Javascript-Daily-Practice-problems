function migratoryBirds(arr) {
    let countMap = {};
    arr.forEach((element) => {
      if (countMap[element] === undefined) {
        countMap[element] = 1;
      } else {
        countMap[element]++;
      }
    });
    
    console.log(countMap)
    
  let max = 0 
  
  for( let  k in countMap )
  {
      if(countMap[k] > max ){
          max = countMap[k]
          
      }
           
  }
    
  console.log(max)  
   
  }