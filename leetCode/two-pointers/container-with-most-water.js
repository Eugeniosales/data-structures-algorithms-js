/**
 * @param {number[]} height
 * @return {number}
 */
/* 
    .Initialize left and right pointer
    .For each pointer, store the maximum water in between
    .Do it while left < right
    .return the maximum water
*/

/* 
    Test
        1. currWater = 8; maxWater = 8;
        2. currWater = 49; maxWater = 49;
        2. currWater = 18; maxWater = 49;
 */

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let currWater = 0,
    maxWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      currWater = height[left] * (right - left);
      left++;
    } else if (height[left] > height[right]) {
      currWater = height[right] * (right - left);
      right--;
    } else {
      currWater = height[right] * (right - left);
      left++;
    }

    maxWater = Math.max(maxWater, currWater);
  }
  return maxWater;
};
