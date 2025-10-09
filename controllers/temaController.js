const temaModel = require('../models/temaModel');

// Muestra la lista de todos los temas
const obtenerTemas = (req, res) => {
  try {
    const temas = temaModel.obtenerTodos();
    res.render('temas/lista', { temas: temas, ok: "", error: "" });
  } catch (err) {
    console.error("Error en obtenerTemas:", err);
    res.render('temas/lista', { temas: [], ok: "", error: "No se pudo cargar la lista de temas" });
  }
};

// --- NUEVA FUNCIÓN 1 ---
// Muestra el formulario para crear un nuevo tema
const formularioNuevoTema = (req, res) => {
  res.render('temas/nuevo'); // Renderiza una nueva vista que crearemos
};

// --- NUEVA FUNCIÓN 2 ---
// Procesa el formulario y crea el tema en la BD
const crearTema = (req, res) => {
  // 'req.body' contiene los datos del formulario (ej: { titulo: '...', descripcion: '...' })
  const { titulo, descripcion } = req.body;

  // Validación básica
  if (!titulo || titulo.trim() === "") {
    // Si hay un error, volvemos a mostrar el formulario (más adelante lo mejoraremos)
    return res.render('temas/nuevo', { error: "El título es obligatorio" });
  }

  try {
    temaModel.crear({ titulo: titulo.trim(), descripcion: descripcion.trim() });
    // Si todo va bien, redirigimos al usuario a la lista de temas
    return res.redirect('/temas');
  } catch (err) {
    console.error("crearTema error:", err);
    return res.render('temas/nuevo', { error: "No se pudo crear el tema." });
  }
};

module.exports = {
  obtenerTemas,
  formularioNuevoTema, // <-- Exportamos las nuevas funciones
  crearTema
};