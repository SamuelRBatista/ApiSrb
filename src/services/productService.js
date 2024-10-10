const ProductRepository = require('../repositories/productRepository');

async function getAllProducts() {
  return await ProductRepository.getAllProducts();
}

async function getProductById(id) {
  return await ProductRepository.getProductById(id);
}

async function createProduct(codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca) {
  const productId = await ProductRepository.createProduct(codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca);
  return productId;
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct
};
