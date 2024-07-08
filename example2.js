const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function filterNumbers(numbers, callback) {
  let result = [];
  let resultIndex = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      result[resultIndex] = numbers[i];
      resultIndex++;
    }
  }
  return result;
}

function even(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(filterNumbers(numbers, even));
