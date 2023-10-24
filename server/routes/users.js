var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

//1.- createUser
//localhost:4000/users/createUser
router.post("/createUser", userController.createUser);
//2.-login method
//localhost:4000/users/login
router.post("/login", userController.login);

module.exports = router;
