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


//modulo3

console.log('Script de inicialización finalizado.');

// (Pega esto al final de tu archivo scripts/seed.js)

console.log('Limpiando datos antiguos...');
db.exec('DELETE FROM enlaces;');
db.exec('DELETE FROM temas;');
db.exec("UPDATE sqlite_sequence SET seq = 0 WHERE name = 'temas';");
db.exec("UPDATE sqlite_sequence SET seq = 0 WHERE name = 'enlaces';");

console.log('Insertando datos de ejemplo...');
const insertTemaStmt = db.prepare('INSERT INTO temas (titulo, descripcion) VALUES (?, ?)');

const temasIniciales = [
  { titulo: 'Node.js y Express', descripcion: 'Configuración y rutas avanzadas.' },
  { titulo: 'JavaScript Puro', descripcion: 'Interacciones asíncronas con el DOM y fetch.' },
  { titulo: 'Arquitectura MVC', descripcion: 'Mejores prácticas de separación de código.' }
];

temasIniciales.forEach(tema => {
  insertTemaStmt.run(tema.titulo, tema.descripcion);
});

console.log('Datos de temas de ejemplo insertados.');
console.log('Script de inicialización finalizado.');