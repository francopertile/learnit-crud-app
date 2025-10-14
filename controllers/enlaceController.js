const enlaceModel = require('../models/enlaceModel');

function postCrearEnlace(req, res) {
  // ... (código existente, sin cambios)
}

// --- NUEVA FUNCIÓN 1 ---
// Muestra el formulario para editar un enlace
function getFormEditarEnlace(req, res) {
  const id = req.params.id;
  const enlace = enlaceModel.obtenerPorId(id);
  if (!enlace) {
    return res.redirect('/temas?error=Enlace no encontrado');
  }
  res.render('enlaces/editar', {
    enlace: enlace,
    error: null
  });
}

// --- NUEVA FUNCIÓN 2 ---
// Procesa la edición de un enlace
function postEditarEnlace(req, res) {
  const id = req.params.id;
  const { titulo, url, descripcion } = req.body;
  const enlaceOriginal = enlaceModel.obtenerPorId(id);

  if (!titulo || titulo.trim() === "" || !url || url.trim() === "") {
    return res.render('enlaces/editar', {
      enlace: enlaceOriginal,
      error: "El título y la URL son obligatorios"
    });
  }
  try {
    const actualizado = enlaceModel.actualizar(id, { titulo, url, descripcion });
    return res.redirect(`/temas/${actualizado.tema_id}`);
  } catch (err) {
    console.error("postEditarEnlace error:", err);
    return res.render('enlaces/editar', {
      enlace: enlaceOriginal,
      error: "No se pudo actualizar el enlace"
    });
  }
}

// --- NUEVA FUNCIÓN 3 ---
// Procesa la eliminación de un enlace
function postEliminarEnlace(req, res) {
  const id = req.params.id;
  const enlace = enlaceModel.obtenerPorId(id);
  if (!enlace) {
    return res.redirect('/temas?error=Enlace no encontrado');
  }
  const temaId = enlace.tema_id;
  enlaceModel.eliminar(id);
  return res.redirect(`/temas/${temaId}`);
}

module.exports = {
  postCrearEnlace,
  getFormEditarEnlace,
  postEditarEnlace,
  postEliminarEnlace
};