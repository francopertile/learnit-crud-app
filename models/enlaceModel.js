const db = require('../db');

// Función para obtener todos los enlaces de un tema específico
const obtenerPorTema = (temaId) => {
  const stmt = db.prepare('SELECT * FROM enlaces WHERE tema_id = ? ORDER BY votos DESC, id DESC');
  return stmt.all(temaId);
};

// Función para obtener un enlace por su ID
const obtenerPorId = (id) => {
  const stmt = db.prepare('SELECT * FROM enlaces WHERE id = ?');
  return stmt.get(id) || null;
};

// Función para crear un nuevo enlace
const crear = ({ tema_id, titulo, url, descripcion = '' }) => {
  if (!titulo || !url) return null;
  const stmt = db.prepare(
    'INSERT INTO enlaces (tema_id, titulo, url, descripcion) VALUES (?, ?, ?, ?)'
  );
  const info = stmt.run(tema_id, titulo.trim(), url.trim(), descripcion.trim());
  return obtenerPorId(info.lastInsertRowid);
};

// --- NUEVA FUNCIÓN 1 ---
// Función para actualizar un enlace
const actualizar = (id, { titulo, url, descripcion = '' }) => {
  if (!titulo || !url) return null;
  const stmt = db.prepare(
    'UPDATE enlaces SET titulo = ?, url = ?, descripcion = ? WHERE id = ?'
  );
  const info = stmt.run(titulo.trim(), url.trim(), descripcion.trim(), id);
  return info.changes > 0 ? obtenerPorId(id) : null;
};

// --- NUEVA FUNCIÓN 2 ---
// Función para eliminar un enlace
const eliminar = (id) => {
  const stmt = db.prepare('DELETE FROM enlaces WHERE id = ?');
  const info = stmt.run(id);
  return info.changes > 0;
};

// Exportamos las funciones
module.exports = {
  obtenerPorTema,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
};