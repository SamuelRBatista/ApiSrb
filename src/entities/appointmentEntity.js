class Appointment {
  constructor(id, user_id, date, time, category_name) {
    this.id = id,
    this.user_id = user_id;
    this.date = date;
    this.time = time;
    this.category_name = category_name; // Nome da categoria
  }
}
  
  module.exports = Appointment;