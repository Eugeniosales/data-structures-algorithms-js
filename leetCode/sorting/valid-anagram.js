/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* 
Steps
  Approach 1
    1.Sort elements
    2.Compare if they are equal
  Approach 2
    1.Count occurence of characteres the s string on map
    2.Decreate occurence of characteres of the t string on the map
    2.If any of the values of the are different of 0
      .Return false
      .Otherwise, return true
Complexity
  Approach 1
    .Time: O(nlogn)
    .Space: O(n)
  Approach 2
    .Time: O(n)
    .Space: O(n)
*/
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};
