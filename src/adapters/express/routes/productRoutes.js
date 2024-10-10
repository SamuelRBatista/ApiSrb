const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const productController = require('../../../controllers/productController');

router.get('/products', verifyToken, productController.getAllProducts);
router.get('/products/:id',verifyToken, productController.getProductById);
router.post('/products',verifyToken, productController.createProduct);

module.exports = router;
