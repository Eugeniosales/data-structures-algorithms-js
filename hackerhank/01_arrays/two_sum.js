/* 

-- Key
Target: Return indexes of array such that elements sum is the target

-- Input and output
In -> nums = [2,7,11,15], target = 9
Out -> [0,1]

-- Constraint
Time ->
    .O(n²) > Double loop to find the sum of items
    .O(n) -> Loop once and cache of hashmap past elements to find the sum
Space ->
    .O(1) -> Space allocation is constant
    .O(n) -> Hashmap size relies on array input size

-- Questions
 */

const twoSum = (arr, target) =>{
  let pastValues = {};

  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in pastValues) {
      return [pastValues[target - arr[i]], i];
    }
    pastValues[arr[i]] = i;
  }
}
