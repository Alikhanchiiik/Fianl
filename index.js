var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json() 
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use('/', router);

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/homepage',function(req,res){
  res.sendFile(path.join(__dirname+'/homepage.html'));
});

app.use('/assets',express.static('assets'));

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/about/team_photo',function(req,res){
	res.sendFile(path.join(__dirname+'/team_photo.html'))
})

router.get('/video',function(req,res){
	res.sendFile(path.join(__dirname+'/video.html'))
})

router.get('/list', (req, res) => {
  res.sendFile(__dirname + '/list.html');
});

app.listen(process.env.port || 3000);
