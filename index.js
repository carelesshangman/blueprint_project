
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

let mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "py"
  });

io.on('connection', (socket) => {
    let a,b;
    setInterval(() => {
        con.query("SELECT * FROM swipe", function(err, result, fields) {
            a = result[0].swipeWhere;
        });
        socket.emit('message',a);
        con.query("SELECT * FROM press", function(err, result, fields) {
            b = result[0].isPressed;
        });
        socket.emit('press',b);
    }, 100);
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );

 
