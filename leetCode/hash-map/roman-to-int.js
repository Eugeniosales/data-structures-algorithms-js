/**
 * @param {string} s
 * @return {number}
 */
/* 
Steps
  1.Initialize
    .Make hash map with roman algorithms and values
    .Declare a variable to save the final value
  2.Loop through the roman number
    .if an roman element is lower then the next roman element, decrease the roman element of the final result
    .Otherwise, increase the value of the response according to the value of the map
  3.Return response
Edge cases
  1.IV, IX
  2.XL, XC
  3.CD, CM
Complexity
  .Time: O(n)
  .Space: O(1)
*/

var romanToInt = function (s) {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;
  for(let i = 0; i < s.length; i++) {
    if(hash[s[i]] < hash[s[i+1]]) {
      ans-=hash[s[i]];
    } else {
      ans+=hash[s[i]];
    }
  }
  return ans;
};
