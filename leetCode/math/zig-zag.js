
function firstZig(a, b, c) {
  return a < b && b > c;
}

function secondZig(a, b, c) {
  return a > b && b < c;
}

function solution(numbers) {
  let ans = [];
  for(let i = 0; i < numbers.length - 2; i++) {
      const a = numbers[i];
      const b = numbers[i+1];
      const c = numbers[i+2];
      if(firstZig(a, b, c) || secondZig(a, b, c)) ans.push(1);
      else ans.push(0);
  }
  return ans;
}
