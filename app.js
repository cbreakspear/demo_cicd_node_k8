var express = require('express');var path = require('path');
const PORT = 80;var app = express();
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static(__dirname + '/css'));
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
testservices = require('./routes/testservices');

app.get('/', testservices.landPage);
app.get('/getQuoteoftheDay', testservices.getQuoteoftheDay);
app.get('/getDateandTime', testservices.getDateandTime);
app.get('/getTest', testservices.getTest);

app.listen(PORT,  function() {console.log('server starting on : ' + PORT);});
