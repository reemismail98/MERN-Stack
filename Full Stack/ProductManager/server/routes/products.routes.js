
const ProductController = require('../controllers/products.controllers')

module.exports = function (app) {
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);

}