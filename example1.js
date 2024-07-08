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
