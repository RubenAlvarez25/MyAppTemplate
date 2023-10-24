var express = require("express");
const customerController = require("../controllers/customerController");
var router = express.Router();

//1. add form info
//localhost:4000/customer/addInfo
router.put("/addInfo", customerController.addInfo);

//2. show info from customer
//localhost:4000/customer/showInfo
router.get("/showInfo", customerController.showInfo);

//3.delete customer info
//localhost:4000/customer/delInfo/:id
router.delete("/delInfo/:id", customerController.delInfo);

module.exports = router;
