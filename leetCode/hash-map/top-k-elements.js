/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/* 
Approach: Bucket Sort

1.Count each element O(n)
2.Fill the array where the indices are the counters and the values the list of elements O(n)
3.Return k elements that appears the most from array O(n)
*/

/* 
Time: O(n)
Space: O(n)
*/
var topKFrequent = function (nums, k) {
  const counter = {};
  const frequency = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
      if (!counter[num]) {
          counter[num] = 0;
      }
      counter[num]++;
  }

  for (const n in counter) {
      frequency[counter[n]].push(parseInt(n));
  }

  const res = [];
  for (let i = frequency.length - 1; i >= 0; i--) {
      for (const number of frequency[i]) {
          res.push(number);
          if (res.length === k) return res;
      }
  }
};
