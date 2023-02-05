import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import knex from "../database";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await knex("users").where("email", email).first();

    if (user && (await bcrypt.compare(password, user.password))) {
      delete user.password;
      delete user.created_at;
      delete user.updated_at;

      const token = jwt.sign({ id: user._id, email }, process.env.JWT_TOKEN, {
        expiresIn: process.env.JWT_EXPIRE,
      });

      user.token = token;

      return res.status(200).json(user);
    }

    res.status(400).send({ message: "Invalid Credentials", type: "error" });
  } catch (error) {
    return next(error);
  }
};

export const refresh = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};
