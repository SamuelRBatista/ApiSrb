const authService = require('../services/authService');

class AuthController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const result = await authService.login(username, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    async register(req, res) {
        try {
            const { username, password } = req.body;
            const userId = await authService.register(username, password);
            res.status(201).json({ id: userId });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();
