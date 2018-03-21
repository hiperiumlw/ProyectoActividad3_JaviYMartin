const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();



APP.listen(3000, () => console.log("He levantado el puerto 3000"));
//APP.get("/login", (req, res)=> res.send(__dirname+'/assets/css'));
APP.use('/',EXPRESS.static(__dirname + '/'));

APP.use('/assets', EXPRESS.static('assets'));
// APP.use('/login', EXPRESS.static(__dirname + '/assets/html/login.html'));
APP.get('/login',(req,res)=> res.sendFile(PATH.join(__dirname+'/assets/html/login.html')));