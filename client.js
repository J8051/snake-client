const { Server } = require("http");
const net = require("net"); 
const { IP, HOST } = require("./constants"); 

const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: IP,
  });

  conn.setEncoding("utf8");
  //listens to data input given to terminal
  conn.on("data", (data) => {
    console.log("server says:", data);
  });
// when connection established it will run the function inside it 
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write('Name: Jes'); 
    // conn.write("Move: up"); 
  }); 
  
  return conn;
}; 

module.exports = {
  connect,
}; 

/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/