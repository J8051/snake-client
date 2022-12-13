const { isGeneratorFunction } = require("util/types");
// Stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin
const setupInput = function (conn) { 
  connection = conn; 
  const stdin = process.stdin; 
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write("Move: up");
    } else if (key === "a") {
      conn.write('Move: left');
    } else if (key === "s") {
      conn.write("Move: down")
    } else if (key === "d") {
      conn.write('Move: right');
    } else if (key === "q") {
      conn.write('Say: wrongKey!')
    } else if (key === "e") { 
      conn.write('Say: finger ssssslip!')
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
setupInput,
};