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

// Función para crear un nuevo tema
const crear = (nuevoTema) => {
  const stmt = db.prepare(
    'INSERT INTO temas (titulo, descripcion) VALUES (?, ?)'
  );
  const info = stmt.run(nuevoTema.titulo, nuevoTema.descripcion);
  return obtenerPorId(info.lastInsertRowid);
};

// --- NUEVA FUNCIÓN ---
// Función para actualizar un tema
const actualizar = (id, datosActualizados) => {
  const stmt = db.prepare(
    'UPDATE temas SET titulo = ?, descripcion = ? WHERE id = ?'
  );
  const info = stmt.run(datosActualizados.titulo, datosActualizados.descripcion, id);
  return info.changes > 0 ? obtenerPorId(id) : null;
};


// Exportamos las funciones
module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar // <-- No olvides exportar la nueva función
};