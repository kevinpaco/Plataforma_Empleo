const ciudadanoCtrl = require('../controllers/Ciudadano.controller');

const express = require('express');

const router = express.Router(); 

//rutas para la gestion de ciudadanos

router.get('/',ciudadanoCtrl.getCiudadanos);
router.get('/email',ciudadanoCtrl.buscarCiudadanoPorEmail);
router.post('/', ciudadanoCtrl.crearCiudadano);
router.put('/actualizar', ciudadanoCtrl.modificarCiudadano);
router.get('/buscar/:id',ciudadanoCtrl.getCiudadano);
router.delete('/eliminar/:id',ciudadanoCtrl.eliminarCiudadano);
router.post('/filtrar/',ciudadanoCtrl.buscarPorProvincia);
module.exports= router;