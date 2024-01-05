const Curriculum = require('../models/Curriculum');
const Ciudadano = require('../models/Ciudadano');
const curriculumCtrl = {};

curriculumCtrl.getCurriculum=async (req,res)=>{
    var curriculums= await Curriculum.find();
    res.json(curriculums);
}

curriculumCtrl.crearCurriculum=async(req,res)=>{
    var curriculum= new Curriculum(req.body);
    try {
          var ciudadano = await Ciudadano.findById(curriculum.ciudadano);
          ciudadano.curriculum=curriculum;
          await Ciudadano.updateOne({_id:curriculum.ciudadano},ciudadano);
          
         if(req.file){
            const {filename} = req.file
           curriculum.setImage(filename);
         }
         
          await curriculum.save();
          res.json({
            'estado':'1',
            'msg':'Curriculum guardado'
          });
    } catch (error) {
        res.status(400).json({
            'estado':'0',
            'msg':'No se guardo el curriculum '+error
        })
    }
}

curriculumCtrl.modificarCurriculum=async (req,res)=>{
    const curriculum = new Curriculum(req.body);
    try {          
          if(req.file){
            const {filename} = req.file
           curriculum.setImage(filename);
         }
          console.log('ess cu: '+curriculum._id);
          await Curriculum.updateOne({_id:req.params.id},curriculum);
          res.json({
            'estado':'1',
            'msg':'Curriculum actualizado'
          })
    } catch (error) {
        res.status(400).json({
            'estado':'0 ',
            'msg':'Error al actualizar Curriculum: '+error
          })
    }
}

module.exports = curriculumCtrl;