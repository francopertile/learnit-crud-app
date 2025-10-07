const path = require('path');
const Database = require('better-sqlite3');

// Creamos la ruta al archivo de la base de datos. Estará en la raíz del proyecto.
const dbPath = path.resolve(__dirname, 'learnit.db');

// Creamos una nueva instancia de la base de datos
const db = new Database(dbPath, { fileMustExist: false });
console.log('Conexión a la base de datos establecida.');

// Exportamos la instancia para poder usarla en otros archivos
module.exports = db;