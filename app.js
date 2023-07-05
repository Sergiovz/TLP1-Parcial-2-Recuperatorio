// Imports
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
require('ejs');

const path = require('path');

const app = express();
const port = process.env.PORT || 3000

// Middlewares
// TODO: Implementar middlewares
app.use(express.json());
app.use(helmet);
app.use(cors);
app.use(morgan('dev'));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log(`Servidor conectado en http:localhost: ${port}`));