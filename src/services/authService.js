const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../entities/userEntity');
const userRepository = require('../repositories/userRepository');

class AuthService {
    async login(username, password) {
        const user = await userRepository.findByUsername(username);
        if (!user) {
            throw new Error('Invalid username or password');
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            throw new Error('Invalid username or password');
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });

         return {
            success: true,
            message: 'Login successful',
            token,
            userId: user.id,
        };
    }

    async register(username, password) {
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User(null, username, hashedPassword);
        const userId = await userRepository.createUser(user);
        return userId;
    }

    // Outros métodos...
}

module.exports = new AuthService();
