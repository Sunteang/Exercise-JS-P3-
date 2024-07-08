// Exercise1:Write a function called that takes an array of numbers and a callback function that processes each element of the array. Use the callback to square each number in the array. (map method of array)
// ex1:
const numbers = [1, 3, 5, 7, 9, 11];

function arrayProcessing(arr) {
  return arr.map((square) => square * square);
}

console.log(arrayProcessing(numbers));

// ex2:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10", "11"];

function processArrayToSquare(numbers, callbackFunc) {
  let getResult = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      getResult[i] = callbackFunc(numbers[i]);
    } else {
      getResult[i] = numbers[i];
    }
  }
  return getResult;
}

function square(number) {
  if (typeof number === "number") {
    return number * number;
  } else {
    return number;
  }
}

console.log(processArrayToSquare(numbers, square));

// ex3:

const numbers = [2, 4, 6, 8, 10];

function toSquare(numbers, callback) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  return result;
}

function square(number) {
  return number * number;
}

const arrToSquare = toSquare(numbers, square);
console.log(arrToSquare);
