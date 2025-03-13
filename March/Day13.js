//Repeated string

function repeatedString(s, n) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }

  let multiple = Math.floor(n / s.length);

  let remainder = n % s.length;
  let result = multiple * count;

  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      result++;
    }
  }

  console.log(result);
}repeatedString('aba',10)
