const mongoose= require('mongoose');
const {Schema}= mongoose;

const CursoSchema= new Schema({
    nombreCurso:{type: String, required:true},
    descripcion:{type: String, required:true},
    fechaInicio:{type: String, required:true},
    fechaFin:{type: String, required:true},
    logo:{type: String, required:false},
    vacantes:{type: Number, required:true},
    ciudadanos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ciudadano', required: false}]
});

module.exports = mongoose.model.Curso || mongoose.model('Curso',CursoSchema);