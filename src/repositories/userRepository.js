const db = require('../config/database');

class UserRepository {
    async findByUsername(username) {
        const query = 'SELECT * FROM usuario WHERE username = ?';
        const [rows] = await db.execute(query, [username]);
        return rows[0];
    }

    async createUser(user) {
        const { username, password } = user;
        const query = 'INSERT INTO usuario (username, password) VALUES (?, ?)';
        const [result] = await db.execute(query, [username, password]);
        return result.insertId;
    }
   
}

module.exports = new UserRepository();
