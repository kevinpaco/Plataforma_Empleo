const mongoose= require('mongoose');
const curso= require('./Curso');
const ciudadano = require('./Ciudadano');

const {Schema} = mongoose;

const CursoCiudadanoSchema = new Schema({
    curso: {type: mongoose.Types.ObjectId, ref:curso, required:true},
    ciudadano: {type:mongoose.Types.ObjectId, ref: ciudadano, required:true}
});

module.exports= mongoose.model.CursoCiudadano || mongoose.model('CursoCiudadano',CursoCiudadanoSchema);