const express = require('express');
const router = express.Router();
// Importamos las nuevas funciones del controlador
const { obtenerTemas, formularioNuevoTema, crearTema } = require('../controllers/temaController');

// Muestra la lista de temas
router.get('/temas', obtenerTemas);

// --- NUEVAS RUTAS ---
// Muestra el formulario para crear un nuevo tema
router.get('/temas/nuevo', formularioNuevoTema);

// Procesa el formulario enviado con método POST
router.post('/temas', crearTema);

module.exports = router;