const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const appointmentController = require('../../../controllers/appointmentController');

router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:id', appointmentController.getAppointmentById);
router.post('/appointments', appointmentController.createAppointment);
router.put('/appointments/:id', appointmentController.updateAppointment);

router.delete('/appointments/:id', appointmentController.deleteAppointment);

module.exports = router;
