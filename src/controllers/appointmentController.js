const AppointmentService = require('../services/appointmentService');
const moment = require('moment');


async function getAllAppointments(req, res) {
    try {
      const appointments = await AppointmentService.getAllAppointments();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function getAppointmentById(req, res) {
    const appointmentId = req.params.id;
    try {
      const appointment = await AppointmentService.getAppointmentById(appointmentId);
      if (!appointment) {
        res.status(404).json({ message: `Appointment with id ${appointmentId} not found.` });
        return;
      }
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function createAppointment(req, res) {
    const { user_id, empresa_id, categoria_id, date, time} = req.body;
    
    // Formatando a data para o formato YYYY-MM-DD
    const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    
    try {
      const appointmentId = await AppointmentService.createAppointment(user_id, empresa_id, categoria_id, formattedDate, time);
      res.status(201).json({ id: appointmentId, message: 'Appointment created successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function updateAppointment(req, res) {
    const appointmentId = req.params.id;
    const { user_id, empresa_id, categoria_id, date, time, id} = req.body;
  
    // Formatando a data para o formato YYYY-MM-DD
    const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  
    try {
      const updated = await AppointmentService.updateAppointment(appointmentId, user_id, empresa_id, categoria_id, formattedDate, time);
      if (!updated) {
        res.status(404).json({ message: `Appointment with id ${appointmentId} not found.` });
        return;
      }
      res.status(200).json({ message: 'Appointment updated successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function deleteAppointment(req, res) {
    const appointmentId = req.params.id;
  
    try {
      const deleted = await AppointmentService.deleteAppointment(appointmentId);
      if (!deleted) {
        res.status(404).json({ message: `Appointment with id ${appointmentId} not found.` });
        return;
      }
      res.status(200).json({ message: 'Appointment deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } 
  
  

  module.exports = {
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment
  };
  