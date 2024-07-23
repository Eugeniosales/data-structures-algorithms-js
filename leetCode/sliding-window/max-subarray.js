/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currSum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;
  
  for(const num of nums) {
    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
