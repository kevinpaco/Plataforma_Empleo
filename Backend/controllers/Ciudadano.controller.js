const { syncIndexes } = require('mongoose');
const Ciudadano = require('../models/Ciudadano');
const ciudadanoCtrl={};

ciudadanoCtrl.getCiudadanos= async (req,res)=>{
    var ciudadanos = await Ciudadano.find().populate('cursos');
    res.json(ciudadanos);
}

ciudadanoCtrl.crearCiudadano= async(req,res)=>{
    var ciudadano = new Ciudadano(req.body);

    try {
        await ciudadano.save();
        res.json({
            'stado':'1',
            'msg': 'Ciudadano guardado'
        })
    } catch (error) {
        res.status(400).json({
            'stado':'0',
            'msg': 'Error al guardar Ciudadano '+error
        })
    }
}

ciudadanoCtrl.getCiudadano= async(req,res)=>{
     console.log('see esta bien');
           const ciudadano = await Ciudadano.findById(req.params.id).populate("cursos");
           res.json(ciudadano);
}

ciudadanoCtrl.modificarCiudadano=async (req,res)=>{
      const ciudadano =new Ciudadano(req.body);
      try { 
          await Ciudadano.updateOne({_id:req.body._id},ciudadano);
          res.json({
            'estado':'1',
            'msg':'Ciudadano Modificado Exitosamente'
          })
      } catch (error) {
          res.status(400).json({
            'estado':'0',
            'msg':'Error al modificar Ciudadano '+error
          })
      }
}

ciudadanoCtrl.eliminarCiudadano=async(req,res)=>{
    try {
          await Ciudadano.deleteOne({_id: req.params.id});
          res.json({
            'estado':'1',
            'msg':'Ciudadano Eliminado'
          })
    } catch (error) {
           res.status(400).json({
            'estado':'0',
            'msg':'Error al eliminar Ciudadano '+error
           })
    }
}

module.exports = ciudadanoCtrl;