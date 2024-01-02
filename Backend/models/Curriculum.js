const mongoose = require('mongoose');

const {Schema} = mongoose;

const CurriculumSchema = new Schema({
    //datos personales
    imagen:{type: String, required:false},
    nombre:{type: String, required:true},
    apellido:{type: String, required:true},
    telefono:{type: String, required:true},
    email:{type: String, required:true},
    fechaNacimiento:{type: String, required:true},
    provincia:{type: String, required:true},
    direccion:{type: String, required:true},
    //datos de primaria
    primaria:{type: String, required:false},
    fechaInicioPrimaria:{type: String, required:false},
    fechaFinPrimaria:{type: String, required:false},
    //datos de secundaria
    secundaria:{type: String, required:false},
    fechaInicioSecundario:{type: String, required:false},
    fechaFinSecundario:{type: String, required:false},
    tituloSecundario:{type: String, required:false},
    //datos de Universidad o terciarios
    terciario:{type: String, required:false},
    fechaInicioTerciario:{type: String, required:false},
    fechaFinTerciario:{type: String, required:false},
    tituloTerciario:{type: String, required:false},

    //datos de Empleado anteriores
    empleador:{type: String, required:false},
    puesto:{type: String, required:false},
    fechaInicioLaboral:{type: String, required:false},
    fehcaFinLaboral:{type: String, required:false},

    idiomas:{type:String, required:false},
    perfilLaboral:{type: String, required:false},
    sobreMi:{type:String,required:false},
    conociemientosInformaticos:{type:String,required:false},
    ciudadano:{type: mongoose.Schema.Types.ObjectId, ref: 'Ciudadano', required:true}
})

CurriculumSchema.methods.setImage = function setImage(filename){
    this.imagen=`http://localhost:3000/public/${filename}`;
}

module.exports= mongoose.model.Curriculum || mongoose.model('Corruculum',CurriculumSchema);