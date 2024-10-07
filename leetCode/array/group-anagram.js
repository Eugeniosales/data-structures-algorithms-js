/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/* 
Time: O(m*n)
Space: O(m)
*/
var groupAnagrams = function (strs) {
  const res = {};

  for (const str of strs) {
      const alphabet = Array(26).fill(0);
      for (const c of str) {
          alphabet[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      alphabet.join(';')

      if (!res[alphabet]) {
          res[alphabet] = [];
      }
      res[alphabet].push(str);
  }

  return Object.values(res);
};
