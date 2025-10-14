const db = require('../db');

const obtenerTodos = () => {
  const stmt = db.prepare('SELECT * FROM temas ORDER BY votos DESC, created_at DESC');
  return stmt.all();
};

const obtenerPorId = (id) => {
  const stmt = db.prepare('SELECT * FROM temas WHERE id = ?');
  return stmt.get(id);
};

const crear = (nuevoTema) => {
  const stmt = db.prepare(
    'INSERT INTO temas (titulo, descripcion) VALUES (?, ?)'
  );
  const info = stmt.run(nuevoTema.titulo, nuevoTema.descripcion);
  return obtenerPorId(info.lastInsertRowid);
};

const actualizar = (id, datosActualizados) => {
  const stmt = db.prepare(
    'UPDATE temas SET titulo = ?, descripcion = ? WHERE id = ?'
  );
  const info = stmt.run(datosActualizados.titulo, datosActualizados.descripcion, id);
  return info.changes > 0 ? obtenerPorId(id) : null;
};

const eliminar = (id) => {
  const stmt = db.prepare('DELETE FROM temas WHERE id = ?');
  const info = stmt.run(id);
  return info.changes > 0;
};

// --- NUEVA FUNCIÓN ---
// Incrementa los votos de un tema en 1
const votar = (id) => {
  const stmt = db.prepare('UPDATE temas SET votos = votos + 1 WHERE id = ?');
  const info = stmt.run(id);
  return info.changes > 0 ? obtenerPorId(id) : null;
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
  votar // <-- Exportamos la nueva función
};