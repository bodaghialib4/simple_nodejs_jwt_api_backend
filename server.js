'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');
const middleware = require('./middleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/api/tips/regular', (req, res) => {
  res.json(data.regular);
});

app.get('/api/tips/special', middleware, (req, res) => {
  res.json(data.special);
});

app.post('/api/auth', (req, res) => {
  let user = data.users.filter((user) => {
    return user.name == req.body.name && user.password == req.body.password;
  });
  if (user.length) {
    let token_payload = {
      name: user[0].name,
      password: user[0].password
    };
    //creating a token using user name and password valid for 2 hours
    let token = jwt.sign(
      token_payload,
      "jwt_secret_password",
      {expiresIn: '2h'}
    );
    let response = {
      message: 'Token created, Authentication Successful!',
      token: token
    };

    return res.status(200).json(response);
  } else {
    return res.status('409').json("Authentication failed. admin not found.");
  }
});

let port = 3100;
app.listen(port);
console.log("app running on port " + port + ": ");
