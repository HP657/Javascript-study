const {Client} = require("pg");
const client = new Client({
    user : "postgres",
    host : "localhost",
    database : "postgres",
    password : "데이터베이스이름",
    port : 5432,
});

client.connect();
client.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    client.end();
})