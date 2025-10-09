// 1. Importaciones
const express = require('express');
const path = require('path');
// Importamos las rutas
const temaRoutes = require('./routes/temaRoutes');

// 2. Inicialización
const app = express();

// 3. Configuraciones
const PORT = 3000;
app.set('view engine', 'ejs'); // Le decimos a Express que use EJS
app.set('views', path.join(__dirname, 'views')); // Le decimos dónde están las vistas

// 4. Middlewares (los veremos más adelante)

// 5. Rutas
app.use(temaRoutes); // Le decimos a la app que use las rutas de temas
// Redirigir la ruta raíz a /temas
app.get('/', (req, res) => {
  res.redirect('/temas');
});

// 6. Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/temas`);
});