// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const { Router } = require('express');
const { obtenerReservas, crearReserva, actualizarReserva, eliminarReserva, renderListaReservas, renderFormNuevaReserva, renderFormEditarReserva, obtenerReserva } = require('../controllers/reserva.controllers');
const router = Router();

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', renderListaReservas);
// Formulario para crear una reserva
router.get('/crear-reserva', renderFormNuevaReserva);
// Formulario para actualizar una reserva
router.get('/actualizar-reserva/:id', renderFormEditarReserva); // para capturar :id -> req.params.id


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api', obtenerReservas);

// Obtener un id
router.get('/api/:id', obtenerReserva);

// Crear una reserva
router.post('/api', crearReserva);
 
// Actualizar una reserva
router.put('/api/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);
 
 module.exports = router;