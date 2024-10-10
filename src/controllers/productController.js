const ProductService = require('../services/productService');

async function getAllProducts(req, res) {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getProductById(req, res) {
  const productId = req.params.id;
  try {
    const product = await ProductService.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: `Product with id ${productId} not found.` });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createProduct(req, res) {
  const { codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca } = req.body;
  try {
    const productId = await ProductService.createProduct(codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca);
    res.status(201).json({ id: productId, message: 'Product created successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct
};
