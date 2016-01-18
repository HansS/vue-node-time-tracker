var express = require('express');
var app = express();

var router = express.Router();

// router.use(function(req, res, next) {
//   next();
// });

// router.get('/api', function(req, res) { 
//   res.json({message: "well hello there"});
// });

app.get('/api/hello', function(req, res) {
  res.json({message: 'hello from app'});
});

app.listen(7777);