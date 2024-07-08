const fs = require("fs");
const readPrintFile = require("./example3");
const filePath = "example/reply.txt";

function writeToFilePath(filePath, content, callback) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("Data error: \n", err);
    } else {
      callback("write file completed successful");
    }
  });
}
writeToFilePath(
  filePath,
  "Hello There!! Nice to see you again. Good Bye.",
  (data) => {
    console.log(data);
  }
);

readPrintFile();

module.exports = writeToFilePath;
