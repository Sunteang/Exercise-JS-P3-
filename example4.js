// Exercise4:Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.
const fs = require("fs");
const filePath = "files/reply.txt";
const content = "Nice to meet you!";

function writeToFilePath(file, content, callbackFunc) {
  fs.writeFile(file, content, (err) => {
    if (err) {
      callbackFunc(err);
    } else {
      callbackFunc(null, "Write file completed successfully");
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
