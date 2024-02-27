const express = require("express");
const app = express();
const port = 8000;

app.use("/b-script", express.static(__dirname + '/b-script'))

app.listen(port, () => {
    console.log("왔다....");
});

app.get("/", (req, res) => {
    console.log("루트");
    res.sendFile(__dirname + "/b-page/b-root.html");
});

app.get("/about", (req, res) => {
    console.log("어바웃");
    res.sendFile(__dirname + "/b-page/b-about.html");
});

app.get("/working", (req, res) => {
    console.log("와쿠잉");
    res.sendFile(__dirname + "/b-page/b-counting.html");
});

