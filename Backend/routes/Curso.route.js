const cursoCtrl = require('../controllers/Curso.controller');
const express = require('express');

var router = express.Router();

router.get('/', cursoCtrl.getCursos);
router.post('/', cursoCtrl.crearCurso);
router.post('/agregar',cursoCtrl.agregarCiudadano);
router.get('/filtrar',cursoCtrl.getCursos);

module.exports=router;
