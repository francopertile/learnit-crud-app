const db = require('../db');

console.log('Ejecutando script de inicialización...');

// Crear la tabla 'temas'
const createTableTemasStmt = `
    CREATE TABLE IF NOT EXISTS temas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        votos INTEGER DEFAULT 0,
        descripcion TEXT DEFAULT "",
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;
db.exec(createTableTemasStmt);
console.log('Tabla "temas" creada o ya existente.');

// Crear la tabla 'enlaces' (con clave foránea)
const createTableEnlacesStmt = `
    CREATE TABLE IF NOT EXISTS enlaces (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tema_id INTEGER NOT NULL,
        titulo TEXT NOT NULL,
        url TEXT NOT NULL,
        descripcion TEXT DEFAULT "",
        votos INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (tema_id) REFERENCES temas(id) ON DELETE CASCADE
    );
`;
db.exec(createTableEnlacesStmt);
console.log('Tabla "enlaces" creada o ya existente.');

console.log('Script de inicialización finalizado.');