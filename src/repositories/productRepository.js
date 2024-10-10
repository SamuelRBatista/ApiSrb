const db = require('../config/database');
const Product = require('../entities/productEntity');

async function getAllProducts() {
  const [rows, fields] = await db.query('SELECT * FROM produto');
  return rows.map(row => new Product(
    row.id,
    row.codigo,
    row.ean,
    row.nome,
    row.descricao,
    row.preco,
    row.quantidade,
    row.validade,
    row.ncm,
    row.cest,
    row.id_categoria,
    row.id_marca,
  ));
}

async function getProductById(id) {
  const [rows, fields] = await db.query('SELECT * FROM produto WHERE id = ?', [id]);
  if (rows.length > 0) {
    const productData = rows[0];
    return new Product(
      productData.id,
      productData.codigo,
      productData.ean,
      productData.nome,
      productData.descricao,
      productData.preco,
      productData.quantidade,
      productData.validade,
      productData.ncm,
      productData.cest,
      productData.id_categoria,
      productData.id_marca,
    );
  }
  return null;
}

async function createProduct(codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca) {
  const [result] = await db.query('INSERT INTO produto (codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca]);
  return result.insertId;
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct
};
