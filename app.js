var express=require('express');
var app=express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',function(){
    res.render('home');
});