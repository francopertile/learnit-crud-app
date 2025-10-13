const express = require('express');
const router = express.Router();

// LÍNEA CORREGIDA: Faltaban varias funciones en la importación
const { 
  obtenerTemas,
  formularioNuevoTema,
  crearTema,
  formularioEditarTema,
  actualizarTema,
  eliminarTema,
  getDetalleTema
} = require('../controllers/temaController');

// Importamos el controlador de enlaces
const { postCrearEnlace } = require('../controllers/enlaceController');

// --- RUTAS DE TEMAS ---
router.get('/temas', obtenerTemas);
router.get('/temas/nuevo', formularioNuevoTema);
router.post('/temas', crearTema);

// Ruta de detalle, ANTES de las rutas con /editar para evitar conflictos
router.get('/temas/:id', getDetalleTema); 
router.post('/temas/:id/enlaces', postCrearEnlace); // Ruta para crear enlaces

// --- RUTAS DE EDICIÓN Y ELIMINACIÓN ---
router.get('/temas/:id/editar', formularioEditarTema);
router.post('/temas/:id/editar', actualizarTema);
router.post('/temas/:id/eliminar', eliminarTema);

module.exports = router;