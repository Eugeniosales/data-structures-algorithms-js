/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/* 
Step 2
[1,2,3,0,0,0]

Step 4
[1,2,3,2,5,6]

i = 0; j = 1
[1,2,3,2,5,6]

i = 1; j = 2
[1,2,3,2,5,6]

i = 2; j = 3
[1,2,2,3,5,6]
*/

/* 
  Steps
    Approach 1 (Two pointers) (Failed)
      1.Initialize j = 0 and i = 0
      2.For each element of nums1
        .If nums1[i] is 0, then replace by nums2[j] and j++
      3.Initialize j = 1 and i = 0
      4.For each element of nums1
        .if nums2[j] < nums1[i]
          .swap nums2[j] and nums1[i]
          .Increment i and j
      5.Return nums1
    Approach 2 (Sorting)
    Approach 3 (Two Pointers) (Passed)
      1.Initialize
        .i = m - 1
        .j = n - 1
        .k = m + n -1
      2.while j > 0
        .if nums2[j] > nums1[i]
          .nums1[k--] = nums2[j--]
        .else
          .nums[k--] = nums1[i--]
  Edge cases
    .n = 0, return nums1
    .m = 0, return []
  Complexity
    .Time: O(n)
    .Space: O(1)
*/

//nums1 = [1,2,3,0,0,0]
//nums2 = [2, 5, 6]

/* 
k = 5; i = 2; j = 2
nums1 = [1,2,3,0,0,6]


k = 4; i = 2; j = 1
nums1 = [1,2,3,0,5,6]

k = 3; i = 2; j = 0
nums1 = [1,2,3,3,5,6]

k = 2; i = 1; j = 0
nums1 = [1,2,2,3,5,6]

k = 2; i = 1; j = -1
nums1 = [1,2,2,3,5,6]

*/

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(j >= 0) {
      if(nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
      else nums1[k--] = nums2[j--];
    }
    
    return nums1;
};
