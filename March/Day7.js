//Beautiful days 
function BeautifulDays(i,j,k){

    let count =0
    for(let a= i ;  a <= j ; a++){
        let b = Math.abs(a - reverse(a)) / k 

        if( b >= 0 && b % 1 == 0){
            count++
        }
    }
    console.log(count)
}BeautifulDays(20 ,23 , 6)

function reverse(n){
    let rev = 0 
    while(n > 0){
        let lastDigit = n % 10 ;
        rev = rev*10 + lastDigit
         n = Math.floor(n/10) 
    }
   return rev 
}



//Breaking the record 

function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    
    
    let minCount = 0
    let maxCount = 0
    for(let i = 1 ; i < scores.length ; i++){
        
        if(max < scores[i] ){
            maxCount++
            max = scores[i]
        }
        
        else if(min > scores[i]){
            minCount++
            min = scores[i]
        }
        
        
    }
    let result = [maxCount , minCount]
    console.log(result.join(" "))

}breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
