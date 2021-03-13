const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
const jwtSecret = 'secret123';

app.get('/jwt', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
  });
});

app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));
const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];

app.get('/foods', (req, res) => {
  res.json(foods);
});

module.exports = app;