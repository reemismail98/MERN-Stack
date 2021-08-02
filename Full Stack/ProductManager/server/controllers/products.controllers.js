
const { Product } = require('../models/products.models')

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json({product}))
        .catch(err => response.json(err))
}

module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
