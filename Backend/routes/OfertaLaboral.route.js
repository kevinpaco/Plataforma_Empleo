const ofertaCtrl = require('../controllers/OfertaLaboral.controller');
const express = require('express');

const router = express.Router();

router.get('/',ofertaCtrl.getOfertasLaborales);
router.post('/', ofertaCtrl.crearOfertaLaboral);

module.exports = router;