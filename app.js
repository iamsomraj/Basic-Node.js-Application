const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// telling express that the engine used for parsing our view is ejs
app.set('view engine', 'ejs');
// telling express where to find the views i.e., in the views folder
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || 'Unknown User';
  // render takes the first arguement as the file name and the second arguement as the object with the values
  res.render('index', {
    user: userName
  });
});

// starting the node js server
app.listen(3000);
