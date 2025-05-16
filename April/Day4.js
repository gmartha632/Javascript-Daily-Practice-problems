//Longest Palindromic substring
function longestPalindromicSubstring(s) {
    let arr = [];
  
   
    for (let i = 0; i < s.length; i++) {
      let subStr = "";
      for (let j = i; j < s.length; j++) {
        subStr += s[j]; 
        arr.push(subStr);
      }
    }
  
    
    let res = "";
    for (let i = 0; i < arr.length; i++) {
      if (isPalindrome(arr[i]) && arr[i].length > res.length) {
        res = arr[i];
      }
    }
  
    console.log(res);
  }
  
  
  function isPalindrome(s) {
    let reversed = "";
    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s[i]; 
    }
    return s === reversed;
  }
  
  longestPalindromicSubstring("babad"); // Output: "bab" or "aba"
  