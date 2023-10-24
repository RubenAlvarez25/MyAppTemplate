var express = require("express");
const multer = require("../middleware/multer");
const productController = require("../controllers/productController");
var router = express.Router();

//1. createProduct
//localhost:4000/product/createProduct/:user_id
router.post(
  "/createProduct/:id",
  multer("imageProduct"),
  productController.createProduct
);

//2. Show all products
//localhost:4000/product/getAllProduct
router.get("/getAllProduct", productController.getAllProduct);

//3. Delete Logic Product
//localhost:4000/product/delProduct/:product_id
router.delete("/delProduct/:id", productController.delProduct);

//4. Shows One product with images
//localhost:4000/products/showProductImages/:product_id
router.get("/showProductImages/:id", productController.showProductImages);

//5. delete images
//localhost:4000/product/delImage/:image_id
router.put("/delImage/:id", productController.delImage);

router.delete("/delTotal/:id", productController.delTotal);

//6. Edit Product
//localhost:4000/product/editProduct/:product_id
router.put(
  "/editProduct/:id",
  multer("imageProduct"),
  productController.editProduct
);

//7. Add images to an existing product
//localhost:4000/product/addImages/:product_id
router.put(
  "/addImages/:id",
  multer("imageProduct"),
  productController.addImages
);
module.exports = router;
