const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
const upload = require('./libs/storage.js');
var app = express();

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamientos de rutas
app.use('/ciudadano', require('./routes/Ciudadano.route.js'));
app.use('/curso',require('./routes/Curso.route.js'));

app.use('/public',express.static(`${__dirname}/storage/imgs`));
app.use('/curriculum',require('./routes/Curriculum.route.js'));

app.use('/empleador',require('./routes/Empleador.route.js'));
app.use('/ofertaLaboral',require('./routes/OfertaLaboral.route.js'));

//setting
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto: ',app.get('port'));
})