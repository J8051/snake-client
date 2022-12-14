// This is the main file that starts the game and connects everything together
const { Server } = require("http");
const { connect } = require("./client"); 
const { setupInput,} = require("./input");  

console.log("connecting..."); 
let connection = connect(); 
setupInput(connection); 
