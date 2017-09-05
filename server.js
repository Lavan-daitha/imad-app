var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;

var config = {
  user : 'daithalavan444' ,
  database:'daithalavan444',
  host:'5432',
  password : process.env.DB_PASSWORD
  
  
    
};
 
 var Pool = new Pool(config);

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/test-db', function(req,res){
    
    //make a request
    //return a response with the result
    
    pool.query('SELECT * FROM test;',function(err,result){
     
     if(err)
     { 
       res.status('500').send(err.toString());
       
     }else{
         res.send(JSON.stringify(result));
     }
     
     
    });
    
});


var counter=0;
app.get('/counter',function(req,res){
 counter=counter+1;
 res.send(counter.toString());
 
    
});
app.get('/page1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/page2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});

app.get('/page3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page3.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
