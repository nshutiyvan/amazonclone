/////declarations
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var User=require('./models/userSchema');
var ejs=require('ejs');
var ejsMate=require('ejs-mate');
var app=express();

mongoose.connect('mongodb://root:chris@ds151068.mlab.com:51068/clone',function(err){
    if(err) console.log(err);
    console.log('we are connected to database');
});
////////////////////////////////////////////////
///middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.set('view engine','ejs');
app.use(express.static('public'));
app.engine('ejs','ejsMate');
app.set('view engine','ejs');
///////////////////////////////////////////

/////routes
app.get('/',function(req,res){
 console.log('home');
});
app.post('/create-user',function(req,res){
  var user=new User();
  user.email=req.body.email;
  user.password=req.body.password;
  user.profile.picture=req.body.picture;
  user.save(function(err){
    if(err) return next(err);
    res.json('success create user');
  });

});
app.get('/cat',function(req,res){
 console.log('cat');
});

app.listen(3000,function(err){
    if(err) throw err;
    console.log('server running');
});
////////////////////////////////////////////