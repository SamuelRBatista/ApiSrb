const CategoryService = require('../services/categoryService');

async function getAllCategories(req, res) {
  try {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getCategoryById(req, res) {
  const categoryId = req.params.id;
  try {
    const category = await CategoryService.getCategoryById(categoryId);
    if (!category) {
      res.status(404).json({ message: `Category with id ${categoryId} not found.` });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getCategoriesByEmpresaId(req, res) {
  const empresaId = req.params.id;
  try {
    const categories = await CategoryService.getCategoriesByEmpresaId(empresaId);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createCategory(req, res) {
  const { name } = req.body;
  try {
    const categoryId = await CategoryService.createCategory(name);
    res.status(201).json({ id: categoryId, message: 'Category created successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  getCategoriesByEmpresaId,
  createCategory
};
