/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/* 
Steps
  Approach 1
    1.Initialize empty array
    2.Loop throush s from the end to the beggining O(n)
    3.Append the elements to empty array
    4.Return array
  Approach 2 (Two Pointers)
    1.Initialize left index with 0 and right inde to s length - 1 O(1)
    2.Initialize hash map with vowels
    3.Start a while loop while left index < right index O(n)
    4.Check is s[left index] is a vowel, otherwise increment left index
    5.Check is s[right index] is a vowel, otherwise increment decrement index
    6.Swap left and right positions of s O(1)
    7.Increment left index O(1)
    8.Decrement right index O(1)
    9.Return s O(1)
EdgeCases
  1.Empty string
  2.Check if it is null
Complexity
  Approach 1
    .Time: O(n)
    .Space: O(n)
  Approach 2
    .Time: O(n)
    .Space: O(1)

*/

var reverseVowels = function(s) {
    let str = s.split('');
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    let temp;
    let vowels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
      A: true,
      E: true,
      I: true,
      O: true,
      U: true,
    }
    
    while(leftIndex < rightIndex) {
      if(!vowels[str[leftIndex]]) {
        leftIndex++;
        continue;
      }
      if(!vowels[str[rightIndex]]) {
        rightIndex--;
        continue;
      }

      temp = s[leftIndex];
      str[leftIndex] = str[rightIndex];
      str[rightIndex] = temp;

      leftIndex++;
      rightIndex--;
    }
    
    return str.join('');
};
