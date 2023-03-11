

const express = require('express');
const JokeAPI = require('sv443-joke-api');
const axios = require("axios");
const app = express();
app.use(express.static('static/'));

const header = 
`{
  "error": false,
  "jokes": [
      {
          "category": "Misc",
          "type": "single",
      },
  ],
  "amount": 10
}`;


//////////////////////////////////////////////////////////////////////////
app.get('/', function(req, res, next) {
  console.log('main');
  res.sendFile(`${__dirname}/index.html`);
});
//////////////////////////////////////////////////////////////////////////

app.get('/home', function(req,res,next){
  console.log('home');  
  
});



module.exports = app;
