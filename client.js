const { Server } = require("http");
const net = require("net"); 

const connect = function () {
  const conn = net.createConnection({
    host: "localHost",
    port: 50541,
  });

  conn.setEncoding("utf8");
  //listens to data input given to terminal
  conn.on("data", (data) => {
    console.log("server says:", data);
  });
// when connection established it will run the fucntion inside it 
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write('Name: JEN')
  }); 
  
  return conn;
}; 

module.exports = {
  connect,
}; 