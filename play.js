const net = require("net"); 
//establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "localHost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => { 
    console.log("server says:", data); 
  })
  
  return conn;
}; 

console.log("connecting..."); 
connect(); 

