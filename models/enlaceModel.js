const db = require('../db');

// Función para obtener todos los enlaces de un tema específico, ordenados por votos
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

// Exportamos las funciones
module.exports = {
  obtenerPorTema,
  obtenerPorId,
  crear,
};