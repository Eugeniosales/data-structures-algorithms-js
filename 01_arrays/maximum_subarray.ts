/* 

-- Key
Target: Given an integer array nums, find the subarray with the largest sum, and return its sum.

-- Input and output
In -> [-2,1,-3,4,-1,2,1,-5,4]
Out -> 6

-- Constraint
Time ->
    .O(n²) -> Brute force approach
    .O(n) -> Kadane's algorithm
Space ->
    .O(1) -> Both approachs

-- Questions
 */

var maxSubArray = function(nums: number[]) {
  // Validation
  if(!nums.length) return;

  // Variables for current sum and max sum    
  let currentSum = nums[0];
  let maxSum = currentSum;

  // Loop through array and find max sum
  for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(currentSum + nums[i], nums[i]);
      maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
