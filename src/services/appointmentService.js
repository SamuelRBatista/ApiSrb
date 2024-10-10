const AppointmentRepository = require('../repositories/appointmentRepository');

async function getAllAppointments() {
  return await AppointmentRepository.getAllAppointments();
}

async function getAppointmentById(id) {
  return await AppointmentRepository.getAppointmentById(id);
}

async function createAppointment(user_id, empresa_id, categoria_id, date, time) {
  const appointmentId = await AppointmentRepository.createAppointment(user_id, empresa_id, categoria_id, date, time);
  return appointmentId;
}

async function updateAppointment(id, user_id, empresa_id, categoria_id, date, time) {
  const appointmentId = await AppointmentRepository.updateAppointment(id, user_id, empresa_id, categoria_id, date, time);
  return appointmentId; 
}

async function deleteAppointment(appointmentId) {
  return await AppointmentRepository.deleteAppointment(appointmentId);
}



module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment
};