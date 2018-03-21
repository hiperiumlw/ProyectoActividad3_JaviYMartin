const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();



APP.listen(3000, () => console.log("He levantado el puerto 3000"));
//APP.get("/login", (req, res)=> res.send(__dirname+'/assets/css'));
APP.use('/',EXPRESS.static(__dirname + '/'));

APP.use('/assets', EXPRESS.static('assets'));

APP.use('/bower_components', EXPRESS.static('bower_components'));
APP.use('/node_modules', EXPRESS.static('node_modules'));

APP.get('/',(req,res)=> res.sendFile(PATH.join(__dirname+'/index.html')));
APP.get('/registro',(req,res)=> res.sendFile(PATH.join(__dirname+'/assets/html/registro.html')));
APP.get('/login',(req,res)=> res.sendFile(PATH.join(__dirname+'/assets/html/login.html')));
APP.get('/:destino',(req,res)=> res.sendFile(PATH.join(__dirname+'/assets/html/destinos/'+req.params.destino+'.html')));

