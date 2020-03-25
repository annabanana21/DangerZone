const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const storyRoute = require('./story');
var path = require('path');

app.use(express.json());
  
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/visuals", express.static(__dirname + '/visuals'));

app.use("/story", storyRoute);

app.listen(port, () => {
  console.log('Listening on', port);
});