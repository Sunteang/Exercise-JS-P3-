// Exercise3:Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.

const fs = require("fs");
const filePath = "files/example.txt";
// const filePath = "example.txt"; // This file does not exist and it will give an error message

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
