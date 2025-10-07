// 1. Importaciones
const express = require('express');

// 2. Inicialización
const app = express();

// 3. Configuraciones
const PORT = 3000;

// 4. Rutas
app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando!');
});

// 5. Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});