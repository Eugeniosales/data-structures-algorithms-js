/* 
-- Key
Find the indexes of the 2 sum array

-- Input and Output
In -> nums = [2,7,11,15], target = 9
Out -> [0,1]

-- Constraint
Time:
  .O(n²)
  .O(n)
Space:
  .O(1)
  .O(n)

-- Questions

*/

const twoSum = (arr, target) =>{
  let pastValues = {};

  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in pastValues) {
      return [pastValues[target - arr[i]], i];
    }
    pastValues[arr[i]] = i;
  }
}

//console.log(twoSum([2,7,11,15], 9))

const loopObj = () => {
  const obj = {
    "eugenio": 1,
    "sales": 2,
    "siqueira": 3
  }
  for (const ob of Object.keys(obj)) {
    console.log(ob, obj[ob])
  }
}

const reduceObj = () => {
  const arr = [
    {
      "value": 1
    },
    {
      "value": 5
    },
    {
      "value": 10
    },
  ]
  const value = arr.reduce((acc, current, index) => {
    acc = acc + current.value;
    console.log("index", index)
    return acc
  }, 0);

  return value;
};

const sortObj = () => {
  var arrayOfObjects = [   
    {
        name: 'Diana',
        born: 1373925600000, // Mon, Jul 15 2013
        num: 4,
        sex: 'female'
    },
    {

        name: 'Beyonce',
        born: 1366832953000, // Wed, Apr 24 2013
        num: 2,
        sex: 'female'
    },
    {            
        name: 'Albert',
        born: 1370288700000, // Mon, Jun 3 2013
        num: 3,
        sex: 'male'
    },    
    {
        name: 'Doris',
        born: 1354412087000, // Sat, Dec 1 2012
        num: 1,
        sex: 'female'
    }
];

  console.log(arrayOfObjects.sort((a, b) => a.num - b.num))
}

sortObj()