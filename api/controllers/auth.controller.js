import Investor from "../models/investor.model.js";
import Pitcher from "../models/pitcher.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role || username === "" || email === "" || password === "" || role === "") {
    next(errorHandler(400, "All fields are required!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    if (role.toLowerCase() === "investor") {
      const newInvestor = new Investor({
        username,
        email,
        password: hashedPassword,
      });
      await newInvestor.save();
    } else if (role.toLowerCase() === "pitcher") {
      const newPitcher = new Pitcher({
        username,
        email,
        password: hashedPassword,
      });
      await newPitcher.save();
    } else {
      return next(errorHandler(400, "Invalid role provided!"));
    }

    res.json("Signup successful!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role || email === "" || password === "" || role === "") {
    return next(errorHandler(400, "Please fill out all fields."));
  }

  try {
    let validUser;

    if (role.toLowerCase() === "investor") {
      validUser = await Investor.findOne({ email });
    } else if (role.toLowerCase() === "pitcher") {
      validUser = await Pitcher.findOne({ email });
    } else {
      return next(errorHandler(400, "Invalid role provided!"));
    }

    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password!"));
    }

    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
