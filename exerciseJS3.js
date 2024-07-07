// Exercise1:Write a function called that takes an array of numbers and a callback function that processes each element of the array. Use the callback to square each number in the array. (map method of array)
// ex1:
const numbers = [1, 3, 5, 7, 9, 11];

function arrayProcessing(arr, toSquare) {
  return arr.map(toSquare);
}

function square(num) {
  return num * num;
}

console.log(arrayProcessing(numbers, square));

// ex2:
const numbers = [1, 3, 5, 7, 9, 11];

function arrayProcessing(arr) {
  return arr.map((square) => square * square);
}

console.log(arrayProcessing(numbers));

// Exercise2:Create a function that takes an array of numbers and a callback. The callback should return true if a number is even. Use the callback to filter the array synchronously. (filter method of array)
// ex1:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function evenNumber(arrays) {
  return arrays.filter((evenNum) => evenNum % 2 == 0);
}

console.log(evenNumber(numbers));

// ex2:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function returnEvenNumber(arrays, even) {
  return arrays.filter(evenNum);
}

function evenNum(num) {
  return num % 2 == 0;
}

console.log(returnEvenNumber(numbers));

// Exercise3:Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.
const fs = require("fs");
const filePath = "files/example.txt";
const filePath = "files/example.txt"; // This file does not exist and it will give an error message

function readAndPrintFile(file, callbackFunc) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      callbackFunc(err, null);
    } else {
      callbackFunc(null, data);
    }
  });
}

function printToConsole(err, data) {
  if (err) {
    console.log("Error reading file:\n", err);
  } else {
    console.log("File contents:\n", data);
  }
}

readAndPrintFile(filePath, printToConsole);

// Exercise4:Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.
const fs = require("fs");
const filePath = "files/reply.txt";
const content = "Nice to meet you!";

function writeToFilePath(file, content, callbackFunc) {
  fs.writeFile(file, content, (err) => {
    if (err) {
      callbackFunc(err);
    } else {
      callbackFunc(null, "Write file successfull");
    }
  });
}

function result(err, contentMessage) {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log(contentMessage);
  }
}

writeToFilePath(filePath, content, result);

// Exercise5:Use the example 3 & 4, write in the below scenario:
// - Read the context of `input.txt`
const fs = require("fs");
const inputFile = "scenario/input.txt";

function readTheContext(file, func) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      return func(err, null);
    } else {
      return func(null, data);
    }
  });
}

function showToConsole(error, data) {
  if (error) {
    console.log("error file: ", error);
  } else {
    console.log("content: \n", data);
  }
}

readTheContext(inputFile, showToConsole);

//- Append “First modification” to the content and write it to `output1.txt`
const fs = require("fs");
const output1 = "scenario/output1.txt";
const textContent = "First modification";

function toOutput1(file, textContent, callback) {
  fs.writeFile(file, textContent, "utf8", (err) => {
    if (err) {
      callback(err);
    }
  });
}

function theResult(error, text) {
  if (error) {
    console.log("Error writing file: ", error);
  } else {
    console.log(text);
  }
}

toOutput1(output1, textContent, theResult);

// - Read `output1.txt` and append “SEcond modification” to the file `output2.txt`
const fs = require("fs");
const output1 = "scenario/output1.txt";
const output2 = "scenario/output2.txt";
const appendContent = "SEcond modification";

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      callback(err);
    }
  });
}

function appendToFile(sourceFile, appendContent, destFile, callback) {
  readFile(sourceFile, (readErr, data) => {
    if (readErr) {
      callback(readErr);
    } else {
      const newContent = data + appendContent;
      writeFile(destFile, newContent, callback);
    }
  });
}

function result(err, textMessage) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(textMessage);
  }
}

appendToFile(output1, appendContent, output2, result);

// - Finally read `output2.txt` and print to the console

const fs = require("fs");
const output1 = "scenario/output1.txt";
const output2 = "scenario/output2.txt";
const appendContent = "Second modification";

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, "Write completed successfully");
    }
  });
}

function appendToFile(sourceFile, appendContent, destFile, callback) {
  readFile(sourceFile, (readErr, data) => {
    if (readErr) {
      callback(readErr);
    } else {
      const newContent = data + appendContent;
      writeFile(destFile, newContent, callback);
    }
  });
}

function printFileContents(filePath, callback) {
  readFile(filePath, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

function handleResult(err, message) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(message);
    // Now read and print the contents of output2.txt
    printFileContents(output2, (readErr, data) => {
      if (readErr) {
        console.log("Error reading output2.txt:", readErr);
      } else {
        console.log("Contents of output2.txt:\n", data);
      }
    });
  }
}

// Example usage:
appendToFile(output1, appendContent, output2, handleResult);
