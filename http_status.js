const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    //res.sendStatus(200);   // 요청 성공 OK
    //res.sendStatus(400);   // 요청 실패 Bad Request
    //403 : forbidden
    //404 : not found
    //500 : internal server error
    //503 : service unavailable
    // 등등 100번대 부터 500번대 까지 많음
});


app.listen(port, () => {
    console.log("start");
});