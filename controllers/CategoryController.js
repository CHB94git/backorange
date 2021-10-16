const categoryModel = require("../models/CategoryModel");

module.exports = class CategoryController {
    
    static async getAll(req, res) {
        try {
            const categories = await categoryModel.find();
            res.status(200).json(categories);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async getById(req, res) {
        try {
            const id = req.params.id;
            const category = await categoryModel.findById({ _id: id });
            if (category == null) {
                res.status(404).json({ message: "No encontrado en la base de datos" });
            } else {
                res.status(200).json(category);
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async create(req, res) {
        try {
            let category = req.body;
            if (category.codeCategory == undefined) {
                res.status(400).json({ message: "La categoría no puede ser guardada sin código" });
            } else {
                category = await categoryModel.create(category);
                res.status(201).json(category);
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const category = req.body;
            await categoryModel.updateOne({ _id: id }, category);
            res.status(200).json()
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
    
    static async delete(req, res) {
        try {
            const id = req.params.id;
            const del = await categoryModel.findByIdAndRemove({_id:id});
            res.status(200).json(del);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}