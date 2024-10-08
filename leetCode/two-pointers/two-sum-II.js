/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/* 
    .initialize two pointers in the begining and end
    .if the sum is greater than the target, decrease right pointer
    .if the sum is smaller thant the target, increase left pointer
    .return result
*/
/* 
Time: O(n)
Space: O(1)
 */
var twoSum = function(numbers, target) {
  let i = 0, j = numbers.length - 1;
  while(i < j) {
      if(numbers[i] + numbers[j] === target) {
          return [i+1, j+1];
      }
      else if(numbers[i] + numbers[j] > target) {
          j--;
      }
      else {
          i++;
      }
  }    
};
