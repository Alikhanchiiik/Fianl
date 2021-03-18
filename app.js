var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

//add the router
app.use('/', router);



router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/homepage.html'));
});
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/HomepageCSS.css'));
  });


router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});
router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/CssAbout.css'));
  });

// app.post('/list', urlencodedParser, function(req, res) {
//   	res.send(req.body);
// });

app.post('/result', urlencodedParser, function (req, res) {
  res.send('hello world')
});

router.get('/result', (req, res) => {
  res.sendFile(__dirname + '/result.html');
});

app.listen(process.env.port || 3000);