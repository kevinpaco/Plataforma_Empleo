const mongoose = require('mongoose');

const {Schema} = mongoose;

const OfertaLaboralSchema= new Schema({
    cantidadVacantes:{type: Number, required:true},
    puestoRequerido:{type:String, required:true},
    resumenPuesto:{type:String, required:true},
    disponibilidadHoraria:{type:String, required:true},
    principalesTareas:{type:String, required:true},
    datosContacto:{type:String, required:true},
    provincia:{type:String, required:true},
    fechaPublicacion:{type: Date, required:true},
    jornada:{type:String, required:true},
    requisitos:{type:String, required:true},
    salario:{type:String, required:true},
    beneficio:{type:String, required:true},
    disponible:{type: Boolean, required:true},
    empleador: {type:mongoose.Schema.Types.ObjectId, ref: 'Empleador', required:true},
    Ciudadanos: [{type:mongoose.Schema.Types.ObjectId, ref: 'Ciudadano', required:false}]
})

module.exports= mongoose.model.OfertaLaboral || mongoose.model('OfertaLaboral',OfertaLaboralSchema);