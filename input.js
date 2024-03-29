let connection;

// = require('./connect');


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}

const handleUserInput = function(key){
   if  (key === '\u0003'){
     console.log("exiting the game now");
     process.exit();
  } if (key === "w"){connection.write("Move: up");
  } if (key === "s"){connection.write("Move: down");
  } if (key === "d"){connection.write("Move: left");
  } if (key === "a"){connection.write("Move: right");
  } if (key === "g"){connection.write("Say: OMG!!");
  } if (key === "l"){connection.write("Say: LOL!!");
 }
}
module.exports = setupInput;