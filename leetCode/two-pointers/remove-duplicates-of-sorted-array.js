/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
Input

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

Steps
Edge Cases
Complexity
  .Time: O(n)
  .Space: O(n)
*/

var removeDuplicates = function(nums) {
  let map = {};
  let index = 0;

  for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]] === undefined) {
      map[nums[i]] = index++;
    }
  }

  for(let num in map) {
    nums[map[num]] = num; 
  }

  return index + 1;
};
