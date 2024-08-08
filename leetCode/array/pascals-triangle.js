/* 
Approach 1 (Bottom up) -> O(n²)

- numRows 1 and 2 are base cases
  .Need to store [[1], [1, 1]]
- For numRow = 3 on
  .Initialize temp array
  .Loop store[numRow-1] = [store[numRow-1][0],...,store[numRow-1][store[numRow-1].length - 1]] -> O(n)
  .For ...
    .Push to temp array the store[numRow-1][i] + store[numRow-1][i+1] -> O(n)
  .Push temp array to store
  .Return store
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 1) return [[1]];
  if(numRows === 2) return [[1], [1, 1]];
  
  let store = [[1], [1, 1]];

  for(let i = 2; i < numRows; i++) {
    let temp = [1];
    for(let j = 0; j < store[i-1].length - 1; j++) {
      let next = store[i-1][j] + store[i-1][j+1];
      temp.push(next);
    }
    temp.push(1);
    store.push(temp);
  }
  return store;
};

console.log(generate(5));
