const db = require('../db'); // Importamos nuestra conexión a la BD

// Función para obtener todos los temas, ordenados por votos (aunque aún no los usamos)
const obtenerTodos = () => {
  const stmt = db.prepare('SELECT * FROM temas ORDER BY votos DESC, created_at DESC');
  return stmt.all();
};

// Función para obtener un tema por su ID
const obtenerPorId = (id) => {
  const stmt = db.prepare('SELECT * FROM temas WHERE id = ?');
  return stmt.get(id);
};

// Exportamos las funciones para poder usarlas en otros archivos
module.exports = {
  obtenerTodos,
  obtenerPorId
};