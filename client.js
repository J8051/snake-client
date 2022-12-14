const { Server } = require("http");
const net = require("net"); 
const { IP, HOST, PORT } = require("./constants"); 

//This function creates a connects to the snake server 
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");
  //This function listens to data input given to terminal
  conn.on("data", (data) => {
    console.log("server says:", data);
  });
// When a connection is established it will run the code block inside this function.  
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write('Name: Jes'); 
  
  }); 
  
  return conn;
}; 

module.exports = {
  connect,
}; 

