import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import ErrorHandler from "../middlewares/error.js";
import { signUpSchema, loginSchema } from "../helper/validation.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  try {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }
    const { name, email, password } = req.body;
    const userInfo = await User.findOne({ email });
    if (userInfo) {
      return next(new ErrorHandler("Email already registered", 400));
    }
    const hashPassword = await bcrypt.hashSync(password, 10);
    const user = await User.create({ name, email, password: hashPassword });
    return res
      .status(200)
      .json({ message: "Account created successfully", data: { user } });
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return next(new ErrorHandler(error.details[0].message, 400));
    }
    const { email, password } = req.body;
    const userInfo = await User.findOne({ email: email });
    if (!userInfo) {
      return next(new ErrorHandler("User not Exist", 400));
    } else if (!bcrypt.compareSync(password, userInfo.password)) {
      return next(new ErrorHandler("Password does not match", 400));
    } else {
      userInfo.password = undefined;
      const token = createToken(userInfo);
      return res
        .status(200)
        .json({ message: "Login Successfully", data: { userInfo, token } });
    }
  } catch (error) {
    next(error);
  }
};

export const userInfo = async (req, res) => {
  try {
    const userInfo = req.user;
    return res
      .status(200)
      .json({ message: "User Information", data: { userInfo } });
  } catch (error) {
    next(error);
  }
};

const createToken = (user) => {
  const userData = { _id: user._id, email: user.email, role: user.role };
  const expiresIn = 60 * 60 * 24;
  const token = jwt.sign(userData, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });
  return { token, expiresIn };
};
