const express = require('express');
const router = express.Router();
const { 
  obtenerTemas, 
  formularioNuevoTema, 
  crearTema,
  formularioEditarTema, // <-- Importamos las nuevas funciones
  actualizarTema 
} = require('../controllers/temaController');

// Muestra la lista de temas
router.get('/temas', obtenerTemas);

// Muestra el formulario para crear un nuevo tema
router.get('/temas/nuevo', formularioNuevoTema);

// Procesa el formulario de creación
router.post('/temas', crearTema);

// --- NUEVAS RUTAS ---
// Muestra el formulario para editar un tema. :id es un parámetro dinámico.
router.get('/temas/:id/editar', formularioEditarTema);

// Procesa el formulario de edición
router.post('/temas/:id/editar', actualizarTema);

module.exports = router;