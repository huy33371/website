import express from "express";
import productRoutes from './productRoutes';
import categoryRoutes from './categoryRoutes';

const router = express.Router();

let initWebRouter = () => {

    // Các routes được xử lý tại đây
    router.get('/', (req, res) => {
        return res.send('Hello world')
    });

    // Sử dụng các routes
    router.use('/products', productRoutes);
    router.use('/categories', categoryRoutes);

    return router;
}

module.exports = initWebRouter;
