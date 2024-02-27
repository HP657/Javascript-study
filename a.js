const express = require("express");
const app = express();
const port = 8000;

let = posts = []

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", main);
app.post("/posts", mak);
app.delete("/posts/:id", del);

function main(req, res) {
    res.json(posts);
}

function mak(req, res) {
    const {title, name, text} = req.body;
    posts.push ({id : posts.length + 1, title, name, text, createdDT : Date()});
    res.json({title, name, text});
}

function del(req, res) {
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id);
    const isLengthChanged = posts.length !== filteredPosts.length;
    posts = filteredPosts;
    if (isLengthChanged) {
        res.json("OK");
        return;
    }
    res.json("Not OK");
}

app.listen(port, () => {
    console.log("끼얏호");
});