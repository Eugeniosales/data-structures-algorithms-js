/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlpha = function (c) {
      return (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9')
  }

  let str = s.split('').filter(c => isAlpha(c)).join('').toLowerCase();

  let i = 0, j = str.length - 1;
  while (i < j) {
      if (str[i++] !== str[j--]) return false;
  }
  return true;
};
