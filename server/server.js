const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

const stories = require('./scenarios');

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.use(cors());


app.get('/scenarios', (req, res) => {
  res.send(stories);
})

app.listen(port, () => {
  console.log('Listening on', port);
});