const Empleador= require('../models/Empleador');
const empleadorCtrl = {}

empleadorCtrl.getEmpleadores=async (req,res)=>{
    var empleadores = await Empleador.find();
    res.json(empleadores);
}

empleadorCtrl.createEmpleador=async (req,res)=>{
    var empledador = new Empleador(req.body);
    try {
          await empledador.save();
          res.json({
            'estado':'1',
            'msg':'Empleador Guardado'
          })
    } catch (error) {
        res.status(400).json({
            'estado':'0',
            'msg':'Error guardando empleador '+error
          })
    }
}

empleadorCtrl.getEmpleador= async(req,res)=>{
      try {
        const empleador = await Empleador.findOne({_id:req.params.id}).populate('ofertasLaborales');
        res.json(empleador);        
      } catch (error) {
        res.status(400).json({
          'estado':'0',
          'msg':'Erro inesperado: '+error
        })
      }
 }

 empleadorCtrl.getEmpleadorPorEmail=async(req,res)=>{
    try {
         let empleador=await Empleador.findOne({email:req.query.email});
         res.json(empleador);
    } catch (error) {
         res.status(400).json({
          'status':0,
          'msg':'Error al buscar empleador por email'+error,
         })
    }
 }

 empleadorCtrl.modificarEmpleador=async(req,res)=>{
       try {
            const empleador= new Empleador(req.body);
            await Empleador.updateOne({_id:req.body._id},empleador);            
            res.json({
              'estado':'1',
              'msg':'Empleador modificado exitosamente'
            }); 
       } catch (error) {
             res.status(400).json({
              'estado':'0',
              'msg':'Error al modificar empleado'
             })
       }
 }

 empleadorCtrl.eliminarEmpleador=async(req,res)=>{
      try {
            await Empleador.deleteOne({_id:req.params.id});
            res.json({
              'estado':'1',
              'msg':'Empleador Eliminado exitosamente'
            });
      } catch (error) {
        res.status(400).json({
          'estado':'0',
          'msg':'Error al eliminar: '+error
        }) 
      }
 }

module.exports = empleadorCtrl;