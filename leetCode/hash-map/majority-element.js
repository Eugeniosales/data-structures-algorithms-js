/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
  Steps
    1.Initialize O(1)
      .Map to use as counter
    2.Loop through each item O(n)
      .Increase the item key of the map
      .If map[key] > (n/2), return response
  Edge cases
    1.Empty array
    2.Undefined input
  Complexity
    .Time: O(n)
    .Space: O(1)
*/

var majorityElement = function(nums) {
    let map = {};
    for(const num of nums) {
      map[num] = map[num] ? map[num] + 1 : 1;
      if (map[num] > nums.length / 2) return num;
    }
};
