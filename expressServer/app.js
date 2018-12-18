const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const hero = require('./router/zxd')


// 链接上数据库  并给数据库命名myZXD
var db = mongoose.connect('mongodb://localhost:27017/myDB',{
	useNewUrlParser: true
});




//
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/apizxd',hero);

app.listen(3001,()=>{
  console.log('app listening on port 3001.')
})
