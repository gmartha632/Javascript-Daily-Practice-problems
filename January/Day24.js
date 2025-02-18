
//Recursion


// Factorial

function factorial(n) {
    if (n < 0) {
        return -1;
    }
    if(n === 0 || n == 1) {
        console.log(n);
        return 1;
    }
    else {
        let result =  n * factorial (n -1);
        console.log(result);
        return result;
    }
}

result = factorial(5);


//Star

function pattern(n){
    if (n < 0) {
        return -1;
    }
    if(n === 0 || n == 1) {
         console.log("*");
         return "*";
     }
     else {
         let output =  "*" + " " + pattern(n -1);
         console.log(output);
         return output;
     }
   }
   
   output = pattern(5)



  // Recursion concept


   function func1(){

    console.log("Calling func1");
    func2() ;
    func3() ;

    console.log("Completed func1");
   }


   function func2(){
    console.log("Calling func2") ;
    console.log("Executed func2") ;

   }

   function func3(){
    console.log("Calling func3") ;
    console.log("Executed func3") ;

   } 

   func1();


   function pattern(n){
      if(n < 1){
        return
      }
      
      else {
        let result =   pattern(n-1) + "* ";
        console.log(result)
        return result
      }
    }
    
    result = pattern(5)