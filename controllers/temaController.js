const temaModel = require('../models/temaModel');
const enlaceModel = require('../models/enlaceModel'); // <-- Importamos el nuevo modelo

const obtenerTemas = (req, res) => {
  // ... (código existente, sin cambios)
};
const formularioNuevoTema = (req, res) => {
  // ... (código existente, sin cambios)
};
const crearTema = (req, res) => {
  // ... (código existente, sin cambios)
};
const formularioEditarTema = (req, res) => {
  // ... (código existente, sin cambios)
};
const actualizarTema = (req, res) => {
  // ... (código existente, sin cambios)
};
const eliminarTema = (req, res) => {
  // ... (código existente, sin cambios)
};

// --- NUEVA FUNCIÓN ---
// Muestra la página de detalle de un tema y sus enlaces
const getDetalleTema = (req, res) => {
  const id = req.params.id;
  const tema = temaModel.obtenerPorId(id);

  if (!tema) {
    return res.redirect('/temas?error=Tema no encontrado');
  }

  const enlaces = enlaceModel.obtenerPorTema(id);

  // Renderiza una nueva vista 'detalle.ejs'
  res.render('temas/detalle', { tema, enlaces, error: null });
};

module.exports = {
  obtenerTemas,
  formularioNuevoTema,
  crearTema,
  formularioEditarTema,
  actualizarTema,
  eliminarTema,
  getDetalleTema // <-- Exportamos la nueva función
};