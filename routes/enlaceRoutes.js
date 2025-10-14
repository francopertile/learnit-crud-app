const express = require('express');
const router = express.Router();
const {
  getFormEditarEnlace,
  postEditarEnlace,
  postEliminarEnlace,
  postVotarEnlace
} = require('../controllers/enlaceController');

router.get('/enlaces/:id/editar', getFormEditarEnlace);
router.post('/enlaces/:id/editar', postEditarEnlace);
router.post('/enlaces/:id/eliminar', postEliminarEnlace);
router.post('/enlaces/:id/votar', postVotarEnlace);

module.exports = router;