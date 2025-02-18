//Switch Case
let day = 4;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//Traffic Light 
let color = "Red"

switch (color) {
    case "Red":
        console.log("Stop");
        break;
    case "Green":
        console.log("Go")
        break;
    case "Yellow":
        console.log("Wait");

    default:
        console.log("Invalid color")

}
// Traffic light approach 2
let trafficLight = "green";
let message = ""

switch (trafficLight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to stop.";
        break;
    case "green":
        message = "Proceed or continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}

console.log(message);

//Qn 1
/*If the age is less than 5, the ticket is free (print "Free").
If the age is between 5 and 12, the ticket price is $10 (print "10").
If the age is between 13 and 64, the ticket price is $20 (print "20").
If the age is 65 or older, the ticket price is $15 (print"15"). */

let age = 50;

if (age < 5) {
    console.log("Free");
}
else if (age > 5 && age < 12) {
    console.log("$10")
}
else if (age > 13 && age < 64) {
    console.log("$20")
}
else if (age > 65) {
    console.log("$15")
}


//Qn 2 : Month checker
let month = 1;
let monthName = "";
switch (month) {
    case 1:
        monthName = "Januray"
        break;
    case 2:
        monthName = "Febraury"
        break;
    case 3:
        monthName = "March"
        break;  
    case 4 :
        monthName = "April"
        break;
    case 5 : 
        monthName = "May"
        break; 
    case 6 :
        monthName =    "June"
        break; 
    case 7 :
        monthName = "July"
        break; 
    case 8 :
        
        monthName =  "August"
        break; 
    case 9:
        monthName = "September"
        break; 
    case 10 :
        monthName = "October"
        break; 
    case 11 :
        monthName = "November"
        break;
    case 12 :
        monthName =  "December"
        break; 
    default :
        console.log("Invalid Input")                        
}

console.log(monthName);

// Qn 3 : calculator
function calculator(operator, number1, number2) {
    let result = 0;
    switch(operator) {
        case '+':
            result = number1 + number2;
            console.log(result);
            break;
        case '-':
            result = number1 - number2;
            console.log(result);
            break;
        case '*':
            result = number1 * number2;
            console.log(result);
            break;
        case '/':
            result = number1 / number2;
            console.log(result);
            break;
        default:
            console.log("invalid operator");
            break;
    }
}calculator('-', 10, 7);

//Qn 4 : Number is between checking
function isBetween(n, l , r) {
    if(n > l && n < r) {
        console.log("yes");        
    }
    
    else {
        console.log("no");
    }
}isBetween(3, 2 , 6)

// Qn 5 : Maximum Of Three numbers 
function maxOfThree(a, b, c) {
    if(a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}