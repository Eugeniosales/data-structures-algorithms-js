/* 
Input: codesignal
Output: cadosegnil
*/

function shiftBruteForce(message) {
  const vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let str = message.split("");
  const vowels = [];
  for (const s of str) {
    if (vowel[s]) vowels.push(s);
  }
  const last = vowels.pop();
  vowels.unshift(last);

  let i = 0;
  for (let k = 0; k < str.length; k++) {
    if (vowel[str[k]]) {
      str[k] = vowels[i++];
    }
  }

  return str.join("");
}

//console.log(shiftBruteForce("codesignal"))

const shiftTwoPointers = (message) => {};

/* 
codesignal

*/

console.log(shiftTwoPointers("codesignal"));
//cadosegnil
