const express = require('express');
const shopController = require('../controllers/products');
const router = express.Router();

router.get('/', shopController.getShop);

module.exports = router;