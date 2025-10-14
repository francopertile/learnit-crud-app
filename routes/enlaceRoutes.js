const express = require('express');
const router = express.Router();
const {
  getFormEditarEnlace,
  postEditarEnlace,
  postEliminarEnlace
} = require('../controllers/enlaceController');

// Rutas para editar un enlace
router.get('/enlaces/:id/editar', getFormEditarEnlace);
router.post('/enlaces/:id/editar', postEditarEnlace);

// Ruta para eliminar un enlace
router.post('/enlaces/:id/eliminar', postEliminarEnlace);

module.exports = router;