const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();
const MYSQL  = require('mysql');
const BODYPARSER = require('body-parser');
APP.use(BODYPARSER.json()); // support json encoded bodies
APP.use(BODYPARSER.urlencoded({ extended: true })); // support encoded bodies

const SHA1 = require('locutus/php/strings/sha1');

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

// POST http://localhost:8080/api/users
// parameters sent with
APP.get('/registro/usuario', function(req, res) {
    var user_id = req.param('usuario');
    var email = req.param('email');
    var contraseña = req.param('contrasenya');
    contraseña = SHA1(contraseña);
    res.send(user_id + ' ' + email + ' ' + contraseña + ' '/* + repetircontraseña*/);
});

// var connection = MYSQL.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysql',
//     database: 'sakila'
// })
//
// connection.connect(function(err) {
//     if (err) throw err
//     console.log('You are now connected...')
// })
//
// connection.query('select * from actor limit 10', function(err, rows, fields) {
//     if (err) throw err;
//     // console.log('The solution is: ', rows[0].solution);
//     rows.forEach((element)=>{
//         console.log(element);
//     });
// });
//
//
// connection.end();

APP.use(function(err, req, res, next) {
    res.status(404).send('ERROR 404 : La pagina web no se encuentra disponible!');
});