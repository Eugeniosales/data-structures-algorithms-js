/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const raw = s.trim();
  const words = raw.split(/\s+/);

  let i = 0;
  let j = words.length - 1;
  while(i < j) {
    let temp = words[i];
    words[i] = words[j];
    words[j] = temp;
    i++;
    j--;
  }
  return words.join(" ");
};
