'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');


var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

// My Code

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  var tmpReq = req.file.size;
  console.log(JSON.stringify(tmpReq, null,2));
  res.json({size: tmpReq});
});

// My Code

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
