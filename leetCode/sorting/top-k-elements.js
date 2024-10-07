/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/* 
Approach: Sorting
*/
// O(n log n)
var topKFrequent = function (nums, k) {
  const map = {};
  // O(n)
  for (const num of nums) {
    if (!map[num]) map[num] = 1;
    else map[num]++;
  }
  const arr = [];
  // O(n)
  for (const [key, value] of Object.entries(map)) {
    arr.push({ key, value });
  }
  // O(n log n)
  const sorted = arr.sort((a, b) => b.value - a.value);
  const ans = [];
  // O(n)
  for (let i = 0; i < k; i++) ans.push(Number(sorted[i].key));
  return ans;
};
