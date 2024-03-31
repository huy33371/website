const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

// Định nghĩa các route
router.post('/', billController.createBill);
router.put('/:id', billController.updateBill);
router.delete('/:id', billController.deleteBill);

module.exports = router;
