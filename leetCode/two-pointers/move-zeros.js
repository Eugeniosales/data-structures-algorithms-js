/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* 
Steps
  1.Initialization O(1)
    .i index with 0
    .j index with 0
  2.for each element
    .if an element of i index is different from 0
      .swap element with j index element
      .Increment j index
  3.Return nums O(1)
Edge cases
  .Array is empty
Complexity
  .Time: O(n)
  .Space: O(1)
*/

/* 
[0,1,0,3,12]

i = 0
j = 0
[0,1,0,3,12]

i = 1
j = 1
[1,0,0,3,12]

i = 2
j = 1
[1,0,0,3,12]

i = 3
j = 2
[1,3,0,0,12]

i = 4
j = 2
[1,3,12,0,0]

*/

var moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};
