/* 
-- Key
Reverse the string

-- Input and Output
i: eugenio 
o: oinegue

-- Constraints
Time:
  .O(n)
Space:
  .O(1)

-- Questions
.

*/
const reverse = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverse("eugenio"));

const obj = { 1: "eugenio" }

console.log( "eugenio" in obj)