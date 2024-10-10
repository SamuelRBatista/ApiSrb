const CategoryRepository = require('../repositories/categoryRepository');

async function getAllCategories() {
  return await CategoryRepository.getAllCategories();
}

async function getCategoryById(id) {
  return await CategoryRepository.getCategoryById(id);
}

async function getCategoriesByEmpresaId(empresaId) {
  return await CategoryRepository.getCategoriesByEmpresaId(empresaId);
}

async function createCategory(name) {
  const categoryId = await CategoryRepository.createCategory(name);
  return categoryId;
}

module.exports = {
  getAllCategories,
  getCategoryById,
  getCategoriesByEmpresaId,
  createCategory
};
