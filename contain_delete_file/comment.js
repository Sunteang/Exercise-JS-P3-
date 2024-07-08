// Exercise1:
// Exercise1:Write a function called that takes an array of numbers and a callback function that processes each element of the array. Use the callback to square each number in the array. (map method of array)
// ex1:
// const numbers = [1, 3, 5, 7, 9, 11];

// function arrayProcessing(arr) {
//   return arr.map((square) => square * square);
// }

// console.log(arrayProcessing(numbers));

// // ex2:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10", "11"];

// function processArrayToSquare(numbers, callbackFunc) {
//   let getResult = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (typeof numbers[i] === "number") {
//       getResult[i] = callbackFunc(numbers[i]);
//     } else {
//       getResult[i] = numbers[i];
//     }
//   }
//   return getResult;
// }

// function square(number) {
//   if (typeof number === "number") {
//     return number * number;
//   } else {
//     return number;
//   }
// }

// console.log(processArrayToSquare(numbers, square));

// Exercise2:
// Exercise2:Create a function that takes an array of numbers and a callback. The callback should return true if a number is even. Use the callback to filter the array synchronously. (filter method of array)
// ex1:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function evenNumber(arrays) {
//   return arrays.filter((evenNum) => evenNum % 2 == 0);
// }

// console.log(evenNumber(numbers));

// Exercise3:
// Exercise3:Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.

// const fs = require("fs");
// const filePath = "files/example.txt";
// // const filePath = "example.txt"; // This file does not exist and it will give an error message

// function readAndPrintFile(file, callbackFunc) {
//   fs.readFile(file, "utf8", (err, data) => {
//     if (err) {
//       callbackFunc(err, null);
//     } else {
//       callbackFunc(null, data);
//     }
//   });
// }

// function printToConsole(err, data) {
//   if (err) {
//     console.log("Error reading file:\n", err);
//   } else {
//     console.log("File contents:\n", data);
//   }
// }

// readAndPrintFile(filePath, printToConsole);

// Exercise4:
// Exercise4:Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.
// const fs = require("fs");
// const filePath = "files/reply.txt";
// const content = "Nice to meet you!";

// function writeToFilePath(file, content, callbackFunc) {
//   fs.writeFile(file, content, (err) => {
//     if (err) {
//       callbackFunc(err);
//     } else {
//       callbackFunc(null, "Write file completed successfully");
//     }
//   });
// }

// function result(err, contentMessage) {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log(contentMessage);
//   }
// }

// writeToFilePath(filePath, content, result);
