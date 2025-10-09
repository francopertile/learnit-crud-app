const temaModel = require('../models/temaModel');

const obtenerTemas = (req, res) => {
  try {
    const temas = temaModel.obtenerTodos();
    res.render('temas/lista', { temas: temas, ok: "", error: "" });
  } catch (err) {
    console.error("Error en obtenerTemas:", err);
    res.render('temas/lista', { temas: [], ok: "", error: "No se pudo cargar la lista de temas" });
  }
};

const formularioNuevoTema = (req, res) => {
  res.render('temas/nuevo', { error: null });
};

const crearTema = (req, res) => {
  const { titulo, descripcion } = req.body;
  if (!titulo || titulo.trim() === "") {
    return res.render('temas/nuevo', { error: "El título es obligatorio" });
  }
  try {
    temaModel.crear({ titulo: titulo.trim(), descripcion: descripcion.trim() });
    return res.redirect('/temas');
  } catch (err) {
    console.error("crearTema error:", err);
    return res.render('temas/nuevo', { error: "No se pudo crear el tema." });
  }
};

// --- NUEVA FUNCIÓN 1 ---
// Muestra el formulario para editar un tema específico
const formularioEditarTema = (req, res) => {
  const id = req.params.id; // Obtenemos el ID de la URL
  const tema = temaModel.obtenerPorId(id);
  if (tema) {
    res.render('temas/editar', { tema: tema, error: null });
  } else {
    res.redirect('/temas'); // Si no se encuentra el tema, redirigimos
  }
};

// --- NUEVA FUNCIÓN 2 ---
// Procesa el formulario de edición
const actualizarTema = (req, res) => {
  const id = req.params.id;
  const { titulo, descripcion } = req.body;

  if (!titulo || titulo.trim() === "") {
    const tema = temaModel.obtenerPorId(id);
    return res.render('temas/editar', { tema: tema, error: "El título es obligatorio" });
  }

  try {
    temaModel.actualizar(id, { titulo: titulo.trim(), descripcion: descripcion.trim() });
    res.redirect('/temas');
  } catch (err) {
    console.error("actualizarTema error:", err);
    const tema = temaModel.obtenerPorId(id);
    return res.render('temas/editar', { tema: tema, error: "No se pudo actualizar el tema." });
  }
};

module.exports = {
  obtenerTemas,
  formularioNuevoTema,
  crearTema,
  formularioEditarTema, // <-- Exportamos las nuevas funciones
  actualizarTema
};