

/**
 * @param {number} n
 * @return {number}
 */

/* 
Approach 1 (Top down)
  .n[i] = n[i-1] + n[i-2]
*/

let memo = {};

var climbStairs = function(n) {
  if(n === 1 || n === 0) return 1;

  if(memo[n]) return memo[n];
  memo[n] = climbStairs(n-1) + climbStairs(n-2);
  return memo[n];    
};


/* 
Approach 2 (Bottom up)
  .n[i] = n[i-1] + n[i-2]
*/

var climbStairs2 = function(n) {
  if(n < 2) return 1;

  let n0 = 1;
  let n1 = 1;
  let n2 = 2;

  for(let i = 2; i <= n; i++) {
    n2 = n0 + n1;
    n0 = n1;
    n1 = n2;
  }

  return n2;
};
