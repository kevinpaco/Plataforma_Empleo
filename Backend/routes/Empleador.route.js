const empleadorCtrl = require('../controllers/Empleador.controller');
const express = require('express');

const router = express.Router();

router.get('/',empleadorCtrl.getEmpleadores);
router.post('/',empleadorCtrl.createEmpleador);
router.get('/buscar/:id',empleadorCtrl.getEmpleador);
router.put('/actualizar',empleadorCtrl.modificarEmpleador);
router.delete('/eliminar/:id',empleadorCtrl.eliminarEmpleador);
module.exports= router;