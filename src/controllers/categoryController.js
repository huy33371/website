import categoryService from '../services/categoryService';

const getAllCategories = async (req, res) => {
    try {
        res.render('test');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
};

const createCategory = async (req, res) => {
    try {
        console.log("check data: ", req.body)
        const { name, image, description, storageCapacity, ram, chipset, display, specialPrice, specialProduct } = req.body;
        const categoryData = { name, image, description, storageCapacity, ram, chipset, display, specialPrice, specialProduct };
        
        const newCategory = await categoryService.createCategory(categoryData);
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAllCategories, createCategory
};