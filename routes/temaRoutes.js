const express = require('express');
const router = express.Router();
const { 
  obtenerTemas, 
  formularioNuevoTema, 
  crearTema,
  formularioEditarTema,
  actualizarTema,
  eliminarTema // <-- Importamos la nueva función
} = require('../controllers/temaController');

// Muestra la lista de temas
router.get('/temas', obtenerTemas);

// Muestra el formulario para crear un nuevo tema
router.get('/temas/nuevo', formularioNuevoTema);

// Procesa el formulario de creación
router.post('/temas', crearTema);

// Muestra el formulario para editar un tema
router.get('/temas/:id/editar', formularioEditarTema);

// Procesa el formulario de edición
router.post('/temas/:id/editar', actualizarTema);

// --- NUEVA RUTA ---
// Procesa la eliminación de un tema
router.post('/temas/:id/eliminar', eliminarTema);

module.exports = router;