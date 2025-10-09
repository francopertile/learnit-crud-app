const express = require('express');
const router = express.Router();
const { obtenerTemas } = require('../controllers/temaController');

// Cuando se haga una petición GET a /temas, se ejecutará la función obtenerTemas
router.get('/temas', obtenerTemas);

module.exports = router;