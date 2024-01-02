const OfertaLaboral = require('../models/OfertaLaboral');
const Empleador = require('../models/Empleador');
const ofertaCtrl = {};

ofertaCtrl.getOfertasLaborales=async (req,res)=>{
    var ofertas =await OfertaLaboral.find();
    res.json(ofertas);
}

ofertaCtrl.crearOfertaLaboral=async(req,res)=>{
    var oferta = new OfertaLaboral(req.body);
    try {
        var empleador = await Empleador.findById(oferta.empleador);
        empleador.ofertasLaborales.push(empleador);
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
module.exports = ofertaCtrl;

