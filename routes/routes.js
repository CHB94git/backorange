const express = require("express");

const productController = require("../controllers/ProductsController");
const categoryController = require("../controllers/CategoryController");
const userController = require("../controllers/UserController");


//Products routes
const router = express.Router();

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getById);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);


//Rutas de categorías
router.get("/categories", categoryController.getAll);
router.get("/categories/:id", categoryController.getById);
router.post("/categories", categoryController.create);
router.put("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);


//rutas de usuario
router.post('/users/add', userController.add);
router.post('/users/login', userController.login);
router.get('/users/list', userController.list);
router.put('/users/enabled', userController.enabled);
router.put('/users/disabled', userController.disabled);
router.put('/users/update', userController.update);

module.exports = router;