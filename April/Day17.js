// Capitalize the first letter of the given string 
let str = "hello world  muthu";
let capitalizedStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizedStr); 