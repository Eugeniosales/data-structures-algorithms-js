/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (const str of strs) {
      const _str = str.split('').sort().join('');
      if (!map[_str]) {
          map[_str] = [str];
      } else {
          map[_str].push(str);
      }
  }
  let arr = []
  for (const [key, value] of Object.entries(map)) arr.push(value);
  return arr;
};