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

const formularioEditarTema = (req, res) => {
  const id = req.params.id;
  const tema = temaModel.obtenerPorId(id);
  if (tema) {
    res.render('temas/editar', { tema: tema, error: null });
  } else {
    res.redirect('/temas');
  }
};

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

// --- NUEVA FUNCIÓN ---
// Procesa la eliminación de un tema
const eliminarTema = (req, res) => {
  const id = req.params.id;
  try {
    temaModel.eliminar(id);
    res.redirect('/temas');
  } catch (err) {
    console.error("eliminarTema error:", err);
    res.redirect('/temas?error=No se pudo eliminar el tema'); // (Mejoraremos esto)
  }
};

module.exports = {
  obtenerTemas,
  formularioNuevoTema,
  crearTema,
  formularioEditarTema,
  actualizarTema,
  eliminarTema // <-- Exportamos la nueva función
};