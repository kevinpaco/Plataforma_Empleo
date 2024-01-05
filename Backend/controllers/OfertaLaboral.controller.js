const OfertaLaboral = require('../models/OfertaLaboral');
const Empleador = require('../models/Empleador');
const Ciudadano = require('../models/Ciudadano');
const ofertaCtrl = {};

ofertaCtrl.getOfertasLaborales=async (req,res)=>{
    let criteria ={};

    if(req.query.provincia !=null && req.query.provincia !="")
         criteria.provincia=req.query.provincia;

    if(req.query.fechaInicio!=null && req.query.fechaInicio != ""){
        console.log("fecha: "+req.query.fechaInicio);
        criteria.fechaPublicacion={
            $gte: new Date(req.query.fechaInicio),
            $lte: Date.now()
        }        
    }

    var ofertas =await OfertaLaboral.find(criteria);
    res.json(ofertas);
}

ofertaCtrl.crearOfertaLaboral=async(req,res)=>{
    var oferta = new OfertaLaboral(req.body);
    try {
        var empleador = await Empleador.findById(oferta.empleador);
        empleador.ofertasLaborales.push(oferta);
        oferta.fechaPublicacion= Date.now();
        await Empleador.updateOne({_id:oferta.empleador},empleador);
        await oferta.save();
        res.json({
            'estado':'1',
            'msg':'Oferta Laboral Guardada'
        })
    } catch (error) {
        res.status(400).json({
            'estado':'0',
            'msg':'Error al Guardar oferta laboral '+error
        })
    }
}

ofertaCtrl.agregarCiudadano=async(req,res)=>{
    try {
         const ofertaLaboral = await OfertaLaboral.findOne({_id:req.body.ofertaId}); 
         const ciudadano = await Ciudadano.findOne({_id:req.body.ciudadanoId});
          
         ofertaLaboral.Ciudadanos.push(ciudadano);
         ciudadano.ofertasLaborales.push(ofertaLaboral);
        
         await OfertaLaboral.updateOne({_id: req.body.ofertaId},ofertaLaboral);
         await Ciudadano.updateOne({_id:req.body.ciudadanoId},ciudadano);

         res.json({
            'estado':'1',
            'msg':'ciudadano agragado a la oferta laboral'
         })
    } catch (error) {
        res.status(400).json({
            'estado':'0',
            'msg':'Error al agregar ciudadano: '+error
        })
    }
}

ofertaCtrl.aceptarPostulante=async (req,res)=>{
     try {
          
           const oferta = await OfertaLaboral.findById(req.params.id);
           oferta.cantidadVacantes--;
           await OfertaLaboral.updateOne({_id:req.params.id},oferta);
           res.json({
            'estado':'1',
            'msg':'Solicitud aceptada del ciudadano'
         })
           
     } catch (error) {
        res.json({
            'estado':'0',
            'msg':'Error al aceptar solicitud del ciudadano'+error
         })
        
     }
}

ofertaCtrl.rechazarPostulante=async (req,res)=>{
    try {
         
          const oferta = await OfertaLaboral.findById(req.body.ofertaId);
          oferta.Ciudadanos.splice(req.body.ciudadanoId)
          await OfertaLaboral.updateOne({_id:req.body.ofertaId},oferta);
          res.json({
           'estado':'1',
           'msg':'Ciudadano Eliminado de la oferta'
        })
          
    } catch (error) {
       res.json({
           'estado':'0',
           'msg':'Error al eliminar solicitud del ciudadano'+error
        })
       
    }
}

ofertaCtrl.modificarOferta=async(req,res)=>{
      try {
           const oferta =new OfertaLaboral(req.body);
           await OfertaLaboral.updateOne({_id:req.body._id},oferta);
           res.json({
            'estado':'1',
            'msg':'Oferta actualizada correctamente'
         })
        } catch (error) {
            res.json({
                'estado':'0',
                'msg':'Error al actualizar oferta laboral '+error
             })
      }
}

ofertaCtrl.eliminarOferta=async(req,res)=>{
    try {
          console.log("empl: "+req.params.id)
          const oferta = await OfertaLaboral.findById(req.params.id);
          const empleador = await Empleador.findById(oferta.empleador);

          empleador.ofertasLaborales.splice(oferta);

          await Empleador.updateOne({_id:oferta.empleador},empleador);
          await OfertaLaboral.deleteOne({_id:req.params.id});
        res.json({
         'estado':'1',
         'msg':'Oferta eliminada correctamente'
      })
     } catch (error) {
         res.json({
             'estado':'0',
             'msg':'Error al eliminar oferta laboral '+error
          })
   }     
}

module.exports = ofertaCtrl;

