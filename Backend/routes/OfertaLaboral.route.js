const ofertaCtrl = require('../controllers/OfertaLaboral.controller');
const express = require('express');

const router = express.Router();

router.get('/',ofertaCtrl.getOfertasLaborales);
router.get('/:id',ofertaCtrl.getOfertaLaboral);
router.post('/', ofertaCtrl.crearOfertaLaboral);
router.post('/agregar/ciudadano',ofertaCtrl.agregarCiudadano);
router.put('/actualizar',ofertaCtrl.modificarOferta);
router.delete('/eliminar/:id',ofertaCtrl.eliminarOferta);
router.put('/aceptar/ciudadano/:id',ofertaCtrl.aceptarPostulante);
router.put('/rechazar/ciudadano',ofertaCtrl.rechazarPostulante);

module.exports = router;