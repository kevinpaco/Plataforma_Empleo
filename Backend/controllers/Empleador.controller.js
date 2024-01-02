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

module.exports = empleadorCtrl;