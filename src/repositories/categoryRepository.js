const db = require('../config/database');
const Category = require('../entities/categoryEntity');

async function getAllCategories() {
  const [rows, fields] = await db.query('SELECT * FROM categories');
  return rows.map(row => new Category(row.id, row.name));
}

async function getCategoryById(id) {
  const [rows, fields] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
  if (rows.length > 0) {
    const categoryData = rows[0];
    return new Category(categoryData.id, categoryData.name);
  }
  return null;
}

async function getCategoriesByEmpresaId(empresaId) {
  const sql = `
    SELECT c.id, c.nomeCategoria AS name
    FROM categoria c
    INNER JOIN empresa_categoria ec ON c.id = ec.categoria_id
    WHERE ec.empresa_id = ?
  `;
  const [rows] = await db.query(sql, [empresaId]);
  return rows;
}

async function createCategory(name) {
  const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
  return result.insertId;
}

module.exports = {
  getAllCategories,
  getCategoryById,
  getCategoriesByEmpresaId,
  createCategory
};
