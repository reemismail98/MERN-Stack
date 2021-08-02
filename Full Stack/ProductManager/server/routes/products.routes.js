
const ProductController = require('../controllers/products.controllers')

module.exports = function (app) {
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id',ProductController.updateProduct);
    app.delete('/api/product/:id',ProductController.deleteProduct);
}