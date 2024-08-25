/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let fullSum = (n*(n+1))/2;
  let currSum = 0;
  for(let i = 0; i < nums.length; i++) currSum += nums[i];
  return fullSum - currSum;
};
