const mysql = require('mysql');
const connection = mysql.createConnection({
    host        : 'localhost',
    port        : '3300',
    user        : 'root',
    password    : 'password',
    database    : 'db_todolist'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Database connected on port 3300');
});

module.exports = connection;