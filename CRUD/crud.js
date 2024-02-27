const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = []
/*
C : CREATE
R : READ
U : UPDATE
D : DELETE
*/
// postman api 써보는데 아주 굳 https://web.postman.co/

// R
app.get('/users', (req, res) => {
    res.json(users);
});

// R
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('사용자를 찾을 수 없습니다.');
  }
});

// C
app.post('/users/:name', (req, res) => {
  const { name } = req.params;
  const id = users.length + 1;
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// U
app.put('/users/:id/:name', (req, res) => {
  const { id, name } = req.params;
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index !== -1) {
    users[index] = { ...users[index], name };
    res.json(users[index]);
  } else {
    res.status(404).send('사용자를 찾을 수 없습니다.');
  }
});

// D
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== parseInt(id));
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log("START");
});
