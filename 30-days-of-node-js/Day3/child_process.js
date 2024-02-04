// Problem 3: Execute Command
// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.

const exe = require("node:child_process");
const { stderr, stdout } = require("node:process");

function executeCommand(command) {
  exe.exec(command, (err, stderr, stdout) => {
    if (err) {
      console.error(err);
      return;
    }
    if (stderr) {
      console.log(`stderr : ${stderr}`);
      return;
    }
    console.log(`stdout : ${stdout}`);
  });
}

executeCommand("ls -la");
executeCommand(`echo "hello nodejs"`);
