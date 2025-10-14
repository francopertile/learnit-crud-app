const db = require('../db');

const obtenerPorTema = (temaId) => {
  const stmt = db.prepare('SELECT * FROM enlaces WHERE tema_id = ? ORDER BY votos DESC, id DESC');
  return stmt.all(temaId);
};

const obtenerPorId = (id) => {
  const stmt = db.prepare('SELECT * FROM enlaces WHERE id = ?');
  return stmt.get(id) || null;
};

const crear = ({ tema_id, titulo, url, descripcion = '' }) => {
  if (!titulo || !url) return null;
  const stmt = db.prepare(
    'INSERT INTO enlaces (tema_id, titulo, url, descripcion) VALUES (?, ?, ?, ?)'
  );
  const info = stmt.run(tema_id, titulo.trim(), url.trim(), descripcion.trim());
  return obtenerPorId(info.lastInsertRowid);
};

const actualizar = (id, { titulo, url, descripcion = '' }) => {
  if (!titulo || !url) return null;
  const stmt = db.prepare(
    'UPDATE enlaces SET titulo = ?, url = ?, descripcion = ? WHERE id = ?'
  );
  const info = stmt.run(titulo.trim(), url.trim(), descripcion.trim(), id);
  return info.changes > 0 ? obtenerPorId(id) : null;
};

const eliminar = (id) => {
  const stmt = db.prepare('DELETE FROM enlaces WHERE id = ?');
  const info = stmt.run(id);
  return info.changes > 0;
};

// --- NUEVA FUNCIÓN ---
// Incrementa los votos de un enlace en 1
const votar = (id) => {
  const stmt = db.prepare('UPDATE enlaces SET votos = votos + 1 WHERE id = ?');
  const info = stmt.run(id);
  return info.changes > 0 ? obtenerPorId(id) : null;
};

module.exports = {
  obtenerPorTema,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
  votar, // <-- Exportamos la nueva función
};