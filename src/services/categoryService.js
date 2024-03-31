import Category from '../models/categorySchema';

const createCategory = async (categoryData) => {
    try {
        const newCategory = new Category(categoryData);
        await newCategory.save();
        return newCategory;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    createCategory
};