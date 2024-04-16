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

const twoSum = (array: number[], target: number): number[] => {
  // Indexes array
  let indexesOutput: number[] = [];

  // Hashmap to store past values
  let pastValuesHash: any = {};

  // loop through array, cache values and find sum
  for (let i = 0; i < array.length; i++) {
      if (target - array[i] in pastValuesHash) {
          indexesOutput = [pastValuesHash[target - array[i]], i];
          break;
      }
      pastValuesHash[array[i]] = i;
  }
  return indexesOutput;
}

console.log(twoSum([2,7,11,15], 9));
