const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote cors
const productRoutes = require('./adapters/express/routes/productRoutes');
const appointmentRoutes = require('./adapters/express/routes/appointmentRoutes');
const categoryRoutes = require('./adapters/express/routes/categoryRoutes');
const authRoutes = require('./adapters/express/routes/authRoutes');

const app = express();

// Middleware
app.use(cors()); // Adicione o middleware cors
app.use(bodyParser.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/api', appointmentRoutes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

module.exports = app;
