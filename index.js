var express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
var upload = multer();
var app = express();

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());
app.use(upload.array());

const nails = require('./nail2.js');



app.use('/nails', nails);
app.get('/', function(req,res){
    res.send(" this  will not call API");
});

app.listen(5000);
