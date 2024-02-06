const path = require("path");

function checkFileExtension(filePath, expectedExtension) {
  var name = path.extname(filePath);
  if (name == expectedExtension) {
    console.log("File has the expected extension : ", expectedExtension);
  } else {
    console.log(
      `Expected extension: ${expectedExtension} and Actual extension: ${name}`
    );
  }
}

checkFileExtension("myfile.txt", ".txt");
checkFileExtension("myfile.txt", ".jpg");
