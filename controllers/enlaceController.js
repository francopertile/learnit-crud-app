const enlaceModel = require('../models/enlaceModel');

function postCrearEnlace(req, res) {
  const temaId = req.params.id;
  const { titulo = "", url = "", descripcion = "" } = req.body;

  if (titulo.trim() === "" || url.trim() === "") {
    return res.redirect(`/temas/${temaId}?error=El título y la URL son obligatorios`);
  }

  try {
    enlaceModel.crear({ tema_id: temaId, titulo, url, descripcion });
    return res.redirect(`/temas/${temaId}`);
  } catch (err) {
    console.error("postCrearEnlace error:", err);
    return res.redirect(`/temas/${temaId}?error=No se pudo crear el enlace`);
  }
}

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

function postVotarEnlace(req, res) {
  const id = req.params.id;
  try {
    const actualizado = enlaceModel.votar(id);
    if (actualizado) {
      return res.json({ ok: true, enlace: actualizado });
    } else {
      return res.status(404).json({ ok: false, error: 'Enlace no encontrado' });
    }
  } catch (err) {
    console.error("postVotarEnlace error:", err);
    return res.status(500).json({ ok: false, error: 'Error al votar' });
  }
}

module.exports = {
  postCrearEnlace,
  getFormEditarEnlace,
  postEditarEnlace,
  postEliminarEnlace,
  postVotarEnlace
};