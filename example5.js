const readPrintFile = require("./example3");
const writeToFilePath = require("./example4");

readPrintFile("example/input.txt", (data) => {
  console.log("Reading File: ", data);

  writeToFilePath(
    "example/output1.txt",
    data + "\nFirst modification",
    (message) => {
      console.log(message);

      readPrintFile("example/output1.txt", (data) => {
        console.log("Reading File: ", data);

        writeToFilePath(
          "example/output2.txt",
          data + "\nSEcond modification",
          (message) => {
            console.log(message);

            readPrintFile("example/output2.txt", (data) => {
              console.log("Reading File: ", data);
            });
          }
        );
      });
    }
  );
});
