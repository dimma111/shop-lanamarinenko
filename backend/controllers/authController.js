const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAccessToken = (id, roles, username) => {
  const payload = {
    id,
    roles,
    username,
  };

  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }

      const { username, password } = req.body; //получаем данные из запроса
      const candidate = await User.findOne({ username }); //сначала ищем в бд пользователя, для проверки на занятости логина

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким логином уже существует" });
      }

      var hashPassword = bcrypt.hashSync(password, 7); //хэшируем пароль
      const userRole = await Role.findOne({ value: "USER" }); //присваиваем дефолтную роль
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      }); //создаем модель

      await user.save(); //сохраняем в бд

      return res.json({ message: "Пользователь успешно зарегистрирован" }); //отвечаем клиенту
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      const token = generateAccessToken(user._id, user.roles, user.username);
      return res.json({
        message: "Вы успешно вошли",
        token,
        user: {
          email: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country,
          city: user.city,
          phone: user.phone,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }

  async auth(req, res) {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const token = generateAccessToken(user._id, user.roles, user.username);
      return res.json({
        token,
        user: {
          email: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country,
          city: user.city,
          phone: user.phone,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
}

module.exports = new authController();
