const express = require('express');
const { http } = require('../../config');

const app = express();


app.get('/', (req, res, next) => {

  res.send('hello word!');
});

app.post('/register', (req, res, next)=>{
  const { body } = req;
  db.users.insertOne({name: 'yayat'})
});

app.listen(http.httpPort, ()=>{
  console.log(`express start on ${http.httpPort}`);
})
