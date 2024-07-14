/**
 * @param {number} n
 * @return {string[]}
 */

/* 
  Steps
    1.Initialize empty array of reponse O(1)
    2.Iterate i from 0 to n-1 O(n)
    3.Push i to response O(1)
      .If its divisible by 3, append Fizz
      .If its divisible by 5, append Buzz
      .If its divible by 3 and 5, FizzBuzz
    4.Return respose O(1)
  Edge case
    1.n = 0
    2.n = undefined
  Complexity
    Approach 1
      Time: O(n)
      Space: O(n)

*/

var fizzBuzz = function(n) {
    const response = [];
    for(let i = 1; i < n + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) response.push("FizzBuzz")
      else if (i % 3 === 0) response.push("Fizz");
      else if (i % 5 === 0) response.push("Buzz");
      else response.push(`${i}`);
    }
    return response;
};
