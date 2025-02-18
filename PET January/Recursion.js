//Towers of Hanoi

function TowersofHanoi(n,s,t,d){
    if(n === 1) {
        console.log(`Move a disk from ${s} to ${d}`)

    }

    else{
        TowersofHanoi(n - 1 , s , d , t );
        console.log(`Move a disk from ${s} to ${d}`)
        TowersofHanoi(n-1 , t ,s ,d) ;

    }

}TowersofHanoi(2,1,2,3);