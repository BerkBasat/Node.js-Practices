const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const products = await Product.find({featured:true})
    res.status(200).json({products, productCount: products.length})
}

const getAllProducts = async (req,res) => {
    const { featured, company, name } = req.query
    const queryObj = {}

    if(featured) {
        queryObj.featured = featured === 'true' ? true : false
    }
    if(company) {
        queryObj.company = company
    }
    if(name) {
        queryObj.name = { $regex: name, $options: 'i' }
    }

    console.log(queryObj)

    const products = await Product.find(queryObj)
    res.status(200).json({products, productCount: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}