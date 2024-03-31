import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    storageCapacity: { type: String }, // Dung lượng
    ram: { type: String }, // RAM
    chipset: { type: String }, // Chip
    display: { type: String }, // Màn hình
    price: { type: Number },
    discountPrice: { type: Number }, // Giá khuyến mãi cho toàn bộ danh mục
    specialProduct: { type: Boolean } // Trạng thái sản phẩm đặc biệt cho toàn bộ danh mục
});

module.exports = mongoose.model('Category', categorySchema);
