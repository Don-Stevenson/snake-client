const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
  host: '172.46.2.204',
  port: 50541});
// interpret incoming data as text
conn.setEncoding('utf8'); 

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  console.log('Successfully connected to game server');
  conn.write('Name: DBS');
  // // setInterval(conn.write("Move: up"), 500);
  // conn.write("Move: down");
  // conn.write("Move: left");
  // conn.write("Move: right");

});


return conn;
}

module.exports = connect;