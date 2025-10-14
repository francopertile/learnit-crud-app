// 1. Importaciones
const express = require('express');
const path = require('path');
const temaRoutes = require('./routes/temaRoutes');
const enlaceRoutes = require('./routes/enlaceRoutes');

// 2. Inicialización
const app = express();

// 3. Configuraciones
const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 4. Middlewares
app.use(express.urlencoded({ extended: true }));

// 5. Rutas
app.use(temaRoutes);
app.use(enlaceRoutes);
app.get('/', (req, res) => {
  res.redirect('/temas');
});

// 6. Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/temas`);
});