const Router = require("express");
const router = new Router();
const controller = require("../controllers/productController");
const roleMiddleware = require("../middleware/roleMiddleware"); //проверка на авторизованность и наличие роли

router.post("/addproduct", roleMiddleware(["ADMIN"]), controller.addProduct);
router.get("/getproducts", controller.getProducts);

module.exports = router;
