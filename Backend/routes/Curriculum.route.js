const curriculumCtrl = require('../controllers/Curriculum.controller');
const upload = require('../libs/storage');
const express = require('express');

const router= express.Router();

router.post('/',upload.single('imagen'),curriculumCtrl.crearCurriculum);
router.get('/',curriculumCtrl.getCurriculum);
router.put('/actualizar/:id',upload.single('imagen'),curriculumCtrl.modificarCurriculum);

module.exports = router;