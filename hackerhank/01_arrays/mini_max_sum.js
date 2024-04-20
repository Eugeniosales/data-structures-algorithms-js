/* 
Target
.Find the minimum and max sum of a array

Entries
.Input: [1, 2, 3, 4, 5]
.Output: 10 14

Walkthrogh Steps

.Approach 1 O(n)
1.Loop throgh array
2.Store lowest and greatest number
3.Return result sum, discards the stored numbers accordingly

Questions
.Input is always sorted?

*/

function miniMaxSum(arr) {
  // Write your code here
  let min = Infinity;
  let max = 0;
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);   
    total += arr[i];
  }

  console.log(`${total-max} ${total-min}`)
}
