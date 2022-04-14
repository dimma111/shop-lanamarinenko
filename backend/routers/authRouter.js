const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");
const { check } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware"); //проверка на авторизованность
const roleMiddleware = require("../middleware/roleMiddleware"); //проверка на авторизованность и наличие роли

router.post(
  "/registration",
  [
    check("username", "имя пользователя не может быть пустым").notEmpty(),
    check("username", "неверная почта").isEmail(),
    check("password", "пароль должен быть длинее 5 символов").isLength({
      min: 5,
    }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/auth", authMiddleware, controller.auth);

router.get("/users", roleMiddleware(["ADMIN"]), controller.getUsers);

module.exports = router;
