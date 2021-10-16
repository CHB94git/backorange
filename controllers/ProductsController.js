const productModel = require("../models/ProductModel");

module.exports = class ProductController {

    static async getAllProducts(req, res) {
        try {
            const products = await productModel.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    static async getById(req, res) {
        try {
            const id = req.params.id;
            const product = await productModel.findById({
                _id: id
            }, req.body);
            if (product == null) {
                res.status(404).json({
                    message: "No encontrado en la base de datos"
                });
            } else {
                res.status(200).json(product);
            }
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    }

    static async create(req, res) {
        try {
            let product = req.body;

            if (product.codeProduct == undefined) {
                res.status(400).json({
                    message: "El producto no puede ser guardado sin código"
                });
            } else {
                product = await productModel.create(product);
                res.status(200).json(product);
            }
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const product = req.body;
            await productModel.updateOne({
                _id: id
            }, product);
            res.status(200).json()
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            const del = await productModel.findByIdAndRemove({
                _id: id
            });
            res.status(200).json(del);
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    }
}