/* 

-- Key
Target: Given 2 sorted arrays, return both merged and kept sorted

-- Input and output
In -> [0, 5, 10, 12];[2, 4, 11, 15]
Out -> [0, 2, 4, 5, 10, 11, 12 , 15]

-- Constraint
Time ->
    .O(n²) -> Double loop and fill out the merged array
    .O(n+m) -> Single loop and compare the element of each array to fill out the merged array
Space ->
    .O(n+m)

-- Questions
    .The elements of the array may be repeated?
 */

const mergedSortedArrays = (array1: number[], array2: number[]): number[] => {
  // Array to be returned
  let mergedArray: number[] = [];
  let array1Index = 0;
  let array2Index = 0;

  // Total items and current item index
  const totalItems = array1.length + array2.length;

  while (1) {
    // Current element
    const element1 =
      array1.length > array1Index ? array1[array1Index] : Infinity;
    const element2 =
      array2.length > array2Index ? array2[array2Index] : Infinity;

    // Current element index
    const currentItem = array1Index + array2Index;

    if (totalItems === currentItem) break;
    if (element1 < element2) {
      mergedArray.push(element1);
      array1Index++;
    } else if (element2 < element1) {
      mergedArray.push(element2);
      array2Index++;
    } else {
      mergedArray.push(element1);
      array1Index++;
      array2Index++;
    }
  }

  return mergedArray;
};

console.log(mergedSortedArrays([2, 5, 8, 16], [2, 7, 10, 16]));
