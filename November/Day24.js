// Binary search
function BinarySearch(arr,val){
      let start = 0
      let end = arr.length - 1
    while(start <= end){

        let mid = Math.floor((start + end) /2)
         
        if(arr[mid] === val) return true;
        
         else if (arr[mid] < val){
             start = mid + 1
        }
        else{
            end = mid - 1
        }

    }
     return false

}console.log(BinarySearch([3,4,5,6,7,8,9,10],11)) ;

//
// Pattern printing

function pattern(n) {
    
    let first = stair(n);
    let sec = staircase(n);
    output = first + sec;
    console.log(output);
} pattern(3)

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let gap = "";
        let star = "";
        let res = "";

        for (let j = 0; j < n - i; j++) {
            gap += " ";
        }
        for (let k = 1; k <= i; k++) {

            star += i;

        }
        res = gap + star;
        return res
    }
}

function stair(n) {
    for (let i = 1; i <= n; i++) {
        let star = "";
        for (let k = 1; k <= i; k++) {

            star += i;
        }
       return star ;
    }
}


