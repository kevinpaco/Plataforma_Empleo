const empleadorCtrl = require('../controllers/Empleador.controller');
const express = require('express');

const router = express.Router();

router.get('/',empleadorCtrl.getEmpleadores);
router.post('/',empleadorCtrl.createEmpleador);

module.exports= router;