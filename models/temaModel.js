const db = require('../db'); // Importamos nuestra conexión a la BD

// Función para obtener todos los temas
const obtenerTodos = () => {
  const stmt = db.prepare('SELECT * FROM temas ORDER BY votos DESC, created_at DESC');
  return stmt.all();
};

// Función para obtener un tema por su ID
const obtenerPorId = (id) => {
  const stmt = db.prepare('SELECT * FROM temas WHERE id = ?');
  return stmt.get(id);
};

// --- NUEVA FUNCIÓN ---
// Función para crear un nuevo tema
const crear = (nuevoTema) => {
  const stmt = db.prepare(
    'INSERT INTO temas (titulo, descripcion) VALUES (?, ?)'
  );
  const info = stmt.run(nuevoTema.titulo, nuevoTema.descripcion);
  return obtenerPorId(info.lastInsertRowid); // Devolvemos el tema recién creado
};

// Exportamos las funciones
module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear // <-- No olvides exportar la nueva función
};