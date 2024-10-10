const db = require('../config/database');
const Appointment = require('../entities/appointmentEntity');


async function getAllAppointments() {
    const [rows, fields] = await db.query('SELECT * FROM appointment');
    return rows.map(row => new Appointment(
      row.user_id,
      row.date,
      row.time,
      row.service_type,
    ));
  }

  async function getAppointmentById(id) {
    const [rows, fields] = await db.query(`
      SELECT 
        ap.id,
        ap.user_id, 
        ap.date, 
        ap.time,      
        cat.nomeCategoria
      FROM appointment as ap
      JOIN categoria as cat ON ap.categoria_id = cat.id 
      WHERE ap.user_id = ?
    `, [id]);
    return rows.map(row => new Appointment(
      row.id,
      row.user_id,
      row.date,
      row.time,    
      row.nomeCategoria // Adicionando o nome da categoria
    ));
  }

  async function createAppointment(user_id, empresa_id, categoria_id, date, time) {
    const [result] = await db.query('INSERT INTO appointment (user_id, empresa_id, categoria_id, date, time) VALUES (?, ?, ?, ?, ?)', [user_id, empresa_id, categoria_id, date, time]);
    return result.insertId;
  }

    async function updateAppointment(id, user_id, empresa_id, categoria_id, date, time) {
      const [result] = await db.query(`
        UPDATE appointment
        SET user_id = ?, empresa_id = ?, categoria_id = ?, date = ?, time = ?
        WHERE id = ?
      `, [user_id, empresa_id, categoria_id, date, time, id]);
    
      return result.affectedRows > 0;
    }

  async function deleteAppointment(appointmentId) {
    const [result] = await db.query(`
      DELETE FROM appointment
      WHERE id = ?
    `, [appointmentId]);
  
    return result.affectedRows > 0;
  }
  
  
  
  module.exports = {
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment
  };