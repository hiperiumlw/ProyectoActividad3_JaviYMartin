const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();

APP.listen(3000, () => console.log("He levantado el puerto 3000"));

APP.use('/',EXPRESS.static(__dirname + '/'));