/* 
Approach 1 O(log n)
.Binary search to find the element
.If not found, left index is where the element should be placed
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0;
  let j = nums.length;
  let mid;

  while (i < j) {
    mid = Math.floor((i + j) / 2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) j = mid - 1;
    else i = mid + 1;
  }

  return left;
};