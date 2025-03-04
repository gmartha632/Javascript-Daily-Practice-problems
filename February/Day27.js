//Remove duplicates  approach by Sandhya

function removeDuplicates(arr) {
    // Enter your code here
    let result=[]
    if(arr==null){
        console.log(" ")
    }
    else{
    for(let i=0; i<arr.length; i++){
        let count=0
        for(let j=0; j<result.length; j++){
            if(arr[i]==arr[j]){
                count+=1
            }
        }
        if(count==0){
            result.push(arr[i])
        }
    }
    console.log(result.join(" "));
}
}removeDuplicates([5, 10, 15, 20, 10, 25, 30, 20, 35, 40])

//Remove duplicates by Pranesh

function removeduplicate(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]=(obj[arr[i]]||0)+1
    }
    console.log(Object.keys(obj).join(" "))
}
 removeduplicate([5, 10, 15, 20, 10, 25, 30, 20, 35, 40])