const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const categoryController = require('../../../controllers/categoryController');

router.get('/categories', verifyToken, categoryController.getAllCategories);
router.get('/categories/:id', verifyToken, categoryController.getCategoryById);
router.post('/categories', verifyToken, categoryController.createCategory);
router.get('/empresa/:id/categories',  categoryController.getCategoriesByEmpresaId);

module.exports = router;
