/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let map1 = {};
  let map2 = {};
  let set1 = new Set();
  let set2 = new Set();
  for (const num of nums1) map1[num] = true;
  for (const num of nums2) map2[num] = true;
  for (const num of nums1) {
    if (!map2[num]) set1.add(num);
  }
  for (const num of nums2) {
    if (!map1[num]) set2.add(num);
  }
  return [[...set1], [...set2]];
};
