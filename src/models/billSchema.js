import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
    totalPrice: { type: Number, required: true },
    saleDate: { type: Date, default: Date.now },
    user: {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        fullname: { type: String },
        address: { type: String }
    },
    billDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BillDetail' }]
});

module.exports = mongoose.model('Bill', billSchema);
