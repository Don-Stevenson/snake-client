const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
  IP, PORT});
// interpret incoming data as text
conn.setEncoding('utf8'); 


conn.on('connect', () => {
  console.log('Successfully connected to game server');
  conn.write('Name: DBS');
  // // setInterval(conn.write("Move: up"), 500);
  // conn.write("Move: down");
  // conn.write("Move: left");
  // conn.write("Move: right");

});

conn.on('data', (data) => {
  console.log('Server says: ', data);
});



return conn;
}

module.exports = connect;