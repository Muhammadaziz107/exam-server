const { users, register, login, adminLogin } = require("./model");
const { signUser, verifyUser } = require("../../lib/jwt");

module.exports = {
  USERS: async (req, res) => {
    try {
      const allUsers = await users();
      res.send(allUsers);
    } catch (err) {
      console.log(err.message);
    }
  },
  REGISTER: async (req, res) => {
    try {
      const { name, password, phone } = req.body;

      const newUser = await register(name, password, phone);

      const token = signUser({ name: name, password: password, phone: phone });

      res.send({ ...newUser, token });
    } catch (err) {
      console.log(err.message);
    }
  },
  LOGIN: async (req, res) => {
    try {
      const { name, password } = req.body;

      const foundUser = await login(name, password);

      if (foundUser) {
        const token = signUser({ name, password });
        res.send({ ...foundUser, token });
      } else {
        res.send("login yoki parol xato");
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  ADMIN_LOGIN: async (req, res) => {
    try {
      const { name, password } = req.body;

      const admin = await adminLogin(name, password);

      if (admin) {
        const token = signUser({ name, password });
        res.send({ ...admin, token });
      } else {
        res.send("login yoki parol xato");
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
