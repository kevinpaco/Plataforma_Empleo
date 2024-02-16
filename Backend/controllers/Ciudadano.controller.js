const { syncIndexes } = require('mongoose');
const Ciudadano = require('../models/Ciudadano');
const ciudadanoCtrl={};

ciudadanoCtrl.getCiudadanos= async (req,res)=>{
    var ciudadanos = await Ciudadano.find().populate('cursos');
    //console.log('yee: '+ciudadanos.nombre);
    res.json(ciudadanos);
}

ciudadanoCtrl.getCiudadano= async(req,res)=>{
    console.log('see esta bien '+req.params.id);
     try {
        const ciudadano = await Ciudadano.findOne({_id:req.params.id}).populate("cursos");
        console.log('ciu '+ciudadano.nombre);
        res.json(ciudadano);  
     } catch (error) {
         res.json({
            'msg':"error: "+error
         })
     }
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

ciudadanoCtrl.buscarPorProvincia= async (req,res)=>{
    try {
          var ciudadanos = await Ciudadano.findOne({provincia: req.body.provincia});
          res.json(ciudadanos);
    } catch (error) {
        res.status(400).json({
            'estado':'0',
            'msg':'Error inesperado: '+ error
        })
    }
}

ciudadanoCtrl.buscarCiudadanoPorEmail=async(req,res)=>{
    try {
          let ciudadano =await Ciudadano.findOne({email:req.query.email});
          res.json(ciudadano);
    } catch (error) {
         res.json({
            'status':0,
            'msg':'Error al buscar ciudadano por email'+error
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