const mongoose = require('mongoose');

const login = require('./login');

const {Schema} = mongoose;

const EmpleadorSchema= new Schema({
    ...login.schema.obj,
    cuit:{type: String, required:true},
    rezonSocial: {type: String, required:true},
    nombreComercial: {type: String, required:true},
    InicioActividad: {type: String, required:true},
    telefono: {type: String, required:true},
    domicilio: {type: String, required:true},
    provincia: {type: String, required:true},
    paginaWeb: {type: String, required:true},
    descripcion: {type: String, required:true},
    ofertasLaborales:[{type: mongoose.Schema.Types.ObjectId, ref: 'OfertaLaboral', required:false}]
})

module.exports= mongoose.model.Empleador || mongoose.model('empleador',EmpleadorSchema);