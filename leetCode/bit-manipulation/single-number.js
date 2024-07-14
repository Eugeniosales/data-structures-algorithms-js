/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
  Steps
    Approach 1
      1.Initialize an empty map O(1)
      2.For each item of the array O(n)
        .Set item as map key
        .Increate each time an item appears
      3.For each element of the map O(n)
        .Find the minimum items appearences
        .Set the response as this item with the least appearences
      4.Return the response O(1)
    Approach 2
      1.Inilize response with -1
      2.For each element, bitwise with xor for each element
      3.Return response
  Edge Cases
    1.Empty array
    2.Equal appearences
  Complexity
    Approach 1
      .Time: O(n)
      .Space: O(n)
    Approach 2
      .Time: O(n)
      .Space O(1)

*/

var singleNumber = function(nums) {
  let response = 0;
  for(const num of nums) response ^= num;
  return response;
};

console.log(singleNumber([4, 1, 1, 1]))