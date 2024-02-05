//Problem Statement: Create a function resolvePath(relativePath)
// that takes a relative path as input and resolves it to an absolute
//  path using the path module. The function should print the resolved
//   path to the console.

const path = require("path");

function resolvePath(relativePath) {
  const absolutePath = path.resolve(relativePath);

  console.log("resolved path is", absolutePath);
}

resolvePath("newFile.txt");
