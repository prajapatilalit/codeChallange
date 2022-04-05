// level {2}

const inputArr = [1, 3, 4, 6, 7, 8];

function getRemoveEvenNum(input) {
  const removeEvenNum = input.filter((num) => num % 2 !== 0);
  return removeEvenNum;
}

console.log(getRemoveEvenNum(inputArr));

const input = "Elie";

function replaceVowel(data) {
  let upperCaseVowel = "";
  const arr = data.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      upperCaseVowel += arr[i].toUpperCase();
    } else {
      upperCaseVowel += arr[i];
    }
  }
  return upperCaseVowel;
}

console.log(replaceVowel(input));

const array = [1, 3, 4, 6, 7, 8, 2, 5];

function getMaxNum(inputData) {
  let max = Math.max(...inputData);
  return max;
}

console.log(getMaxNum(array));
