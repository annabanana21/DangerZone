const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const storyRoute = require('./story');

app.use(express.json());
  
app.use(cors());
app.use("/public", express.static(__dirname + '/public'));

app.use("/story", storyRoute);

app.listen(port, () => {
  console.log('Listening on', port);
});