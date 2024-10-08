/**
 * @param {number[]} nums
 * @return {number}
 */

 /* 
 .If num has not a left neighbor, then the sequence starts
 .As the next consecutive elements exist in the set, increment the current value and update max value
 .Do it until the last element
*/
/* 
Time: O(n)
Space: O(n)
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let max = 0;
  let curr = 0;
  for(let i = 0; i < nums.length; i++) {
      if(!set.has(nums[i]-1)) {
          while(set.has(nums[i]++)) {
              curr++;
          }
      }
      max = Math.max(curr, max);
      curr = 0;
  }
  return max;
};