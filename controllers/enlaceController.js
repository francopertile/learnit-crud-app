const enlaceModel = require('../models/enlaceModel');

// Procesa el formulario para crear un nuevo enlace
function postCrearEnlace(req, res) {
  const temaId = req.params.id; // El ID del tema viene de la URL
  const { titulo = "", url = "", descripcion = "" } = req.body;

  // Validación
  if (titulo.trim() === "" || url.trim() === "") {
    // (Mejoraremos el manejo de errores más adelante)
    return res.redirect(`/temas/${temaId}?error=El título y la URL son obligatorios`);
  }

  try {
    enlaceModel.crear({ tema_id: temaId, titulo, url, descripcion });
    return res.redirect(`/temas/${temaId}`); // Redirige de vuelta a la página de detalle
  } catch (err) {
    console.error("postCrearEnlace error:", err);
    return res.redirect(`/temas/${temaId}?error=No se pudo crear el enlace`);
  }
}

module.exports = {
  postCrearEnlace
};