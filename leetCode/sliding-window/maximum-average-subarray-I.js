/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = Number.MIN_VALUE;
  for(let i = 0; i < k; i++) {
    max = nums[i];
  }
  for(let i = k; i < nums.length; i++) {
    let curr = max + nums[i] - nums[i - k];
    max = Math.max(curr, max);
  }
  return max / 4;
};