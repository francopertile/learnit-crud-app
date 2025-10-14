const express = require('express');
const router = express.Router();
const { 
  obtenerTemas,
  formularioNuevoTema,
  crearTema,
  formularioEditarTema,
  actualizarTema,
  eliminarTema,
  getDetalleTema,
  votarTema
} = require('../controllers/temaController');
const { postCrearEnlace } = require('../controllers/enlaceController');

router.get('/temas', obtenerTemas);
router.get('/temas/nuevo', formularioNuevoTema);
router.post('/temas', crearTema);
router.get('/temas/:id', getDetalleTema); 
router.post('/temas/:id/enlaces', postCrearEnlace);
router.get('/temas/:id/editar', formularioEditarTema);
router.post('/temas/:id/editar', actualizarTema);
router.post('/temas/:id/eliminar', eliminarTema);
router.post('/temas/:id/votar', votarTema);

module.exports = router;