//Hackerrank Problems

// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?
function utopianTree(n) {
  let height = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      height *= 2;
    } else height += 1;
  }
  return height;
}

/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:
The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Example :
ranked = [100, 90, 90, 80]
player = [70,80,105]
The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4,3  and 1. Return [4,3,1] .
*/

function climbingLeaderboard(ranked, player) {
  const uniqueRanks = [];
  for (let i = 0; i < ranked.length; i++) {
    if (i === 0 || ranked[i] !== ranked[i - 1]) {
      uniqueRanks.push(ranked[i]);
    }
  }

  const result = [];
  let i = uniqueRanks.length - 1;

  for (const score of player) {
    while (i >= 0 && score >= uniqueRanks[i]) {
      i--;
    }
    result.push(i + 2);
  }

  return result;
}

/*
You have two strings of lowercase English letters. You can perform two types of operations on the first string:
Append a lowercase English letter to the end of the string.
Delete the last character of the string. Performing this operation on an empty string results in an empty string.
Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No.
Example: 
       s = [a,b,c] 
       t = [d,e,f]  
       k = 6
To convert  to , we first delete all of the characters in  moves. Next we add each of the characters of  in order. On the  move, you will have the matching string. Return Yes.
If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string. If there were fewer than  moves, we would not have succeeded in creating the new string.
*/

function appendAndDelete(s, t, k) {
  let i = 0;
  while (i < s.length && i < t.length && s[i] === t[i]) {
    i++;
  }

  let deletions = s.length - i;
  let additions = t.length - i;
  let operations = deletions + additions;

  if (operations === k) {
    return "Yes";
  } else if (operations < k) {
    const diff = k - operations;
    if (diff % 2 === 0 || k >= s.length + t.length) {
      return "Yes";
    } else {
      return "No";
    }
  } else {
    return "No";
  }
}

/*
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.
Example
    a = [1,1,2,2,4,4,5,5,5]
    The subarrays meeting the criterion are [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 5 elements.
Function Description
    Complete the pickingNumbers function in the editor below.
    pickingNumbers has the following parameter(s):
    int a[n]: an array of integers
Returns
    int: the length of the longest subarray that meets the criterion
*/

function pickingNumbers(a) {
  let max = 0;
  let len = a.length;
  for (let i = 0; i < len; i++) {
    let count = 1;
    for (let j = 0; j < len; j++) {
      if (i !== j && (a[i] === a[j] || a[i] === a[j] - 1)) {
        count++;
      }
    }
    max = Math.max(max, count);
  }
  return max;
}
