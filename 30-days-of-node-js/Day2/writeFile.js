const fs = require("fs");

function writeToFile(filePath, content) {
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to " + filePath);
  });
}

let content = "This is the data to be written in toWrite.txt file.";
writeToFile("toWrite.txt", content);
writeToFile("../nonEcjdh/toWrite.txt", content);
