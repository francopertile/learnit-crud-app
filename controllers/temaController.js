const temaModel = require('../models/temaModel');

const obtenerTemas = (req, res) => {
  try {
    const temas = temaModel.obtenerTodos();
    // Renderizamos la vista 'lista.ejs' y le pasamos el array de temas
    res.render('temas/lista', { temas: temas, ok: "", error: "" });
  } catch (err) {
    console.error("Error en obtenerTemas:", err);
    res.render('temas/lista', { temas: [], ok: "", error: "No se pudo cargar la lista de temas" });
  }
};

module.exports = {
  obtenerTemas
};