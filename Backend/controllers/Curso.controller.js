const Ciudadano = require('../models/Ciudadano');
const Curso=require('../models/Curso');
const CursoCiudadano= require('../models/CursoCiudadano');
const cursoCtrl = {};

cursoCtrl.getCursos=async(req,res)=>{
    let criteria ={};
    if(req.query.categoria!=null || req.query.categoria!="")
         criteria.categoria=req.query.categoria;

    var cursos =await Curso.find(criteria).populate('ciudadanos');
    res.json(cursos);
}

cursoCtrl.crearCurso=async(req,res)=>{
    var curso = new Curso(req.body);
    try {
        await curso.save();
        res.json({
            'estado':'1',
            'msg':'Curso Guardado'
        })
    } catch (error) {
        res.status(400).json({
            'estado':'0',
            'msg':'Error guardando Curso'
        })
    }
}

cursoCtrl.agregarCiudadano= async (req,res)=>{
     var cursoCiudadano=new CursoCiudadano(req.body);
     try {
          const curso = await Curso.findById(req.body.curso);
          const ciudadano = await Ciudadano.findById(req.body.ciudadano);
          curso.vacantes--;
          curso.ciudadanos.push(ciudadano._id);
          ciudadano.cursos.push(curso._id);
          await Curso.updateOne({_id: req.body.curso},curso);
          await Ciudadano.updateOne({_id:req.body.ciudadano},ciudadano);
        res.json({
            'estado':'1',
            'msg':'Ciudadano agregado al curso'
        })
    } catch (error) {
        res.status(400).json({
            'estado':'0',
            'msg':'Error al agregar ciudadano al curso '+error
        })
    }
}

cursoCtrl.buscarPorCategoria=async (req,res)=>{
      try {
            const categoria = req.query.categoria;
            const curso = await Curso.find({categoria:categoria});
            res.json(curso);
      } catch (error) {
           res.status(400).json({
               'estado':'0',
               'msg':'Error al buscar curso: '+error
           });
      }
}

module.exports = cursoCtrl;