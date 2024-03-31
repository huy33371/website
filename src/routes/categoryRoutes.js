import express from "express";
const router = express.Router();
import categoryController from '../controllers/categoryController';

// Định nghĩa các route
router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);
// router.put('/:id', categoryController.updateCategory);
// router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
