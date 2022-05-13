const res = require("express/lib/response");
const User = require("../models/User.js");

const register = async () => {
      
      const name = "Mert";
      const email = "deneme@gmail.com";
      const password = "123456"

      const user = await User.create({
            name,
            email,
            password
      });

      res.status(200).json({
          success: true,
          data: user
      });

};

module.exports = {register}