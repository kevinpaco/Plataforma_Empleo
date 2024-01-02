const mongoose = require('mongoose');
const curso = require('./Curso');
const login = require('./login');

const {Schema} = mongoose

const CiudadanoSchema = new Schema({
    ...login.schema.obj,
    dni:{type: Number, required:true},
    nombre:{type: String, required:true},
    provincia:{type: String, required:true},
    estadoCivil:{type: String, required:true},
    telefono: {type: Number, required:true},
    fechaNacimiento: {type: String, required:true},
    curriculum:{type:mongoose.Schema.Types.ObjectId, ref:'Curriculum', required:false},
    cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: false}],
    ofertasLaborales:[{type: mongoose.Schema.Types.ObjectId, ref: 'OfertasLaborales',required:false}]
});

module.exports = mongoose.model.Ciudadano || mongoose.model('Ciudadano',CiudadanoSchema);