// level {2}

let input = 6;
function sumOfFib(inputData) {
  let num = 1;
  let fibNum = [];

  for (let i = 0; i < inputData; i++) {
    fibNum.unshift(num);
  }
  return fibNum;
}

console.log(sumOfFib(input));
