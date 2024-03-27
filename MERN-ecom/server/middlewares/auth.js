import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import ErrorHandler from "./error.js";

const authMiddleware = async (req, res, next) => {
  try {
    const Authorization = req.header("Authorization")
      ? req.header("Authorization").split(" ")[1]
      : null;
    if (!Authorization) {
      return next(new ErrorHandler("No token provided", 401));
    }
    const verifyToken = await jwt.verify(Authorization, process.env.JWT_SECRET);
    const userId = verifyToken._id;
    const userInfo = await User.findById(userId);
    if (userInfo) {
      req.user = userInfo;
      req.user.Authorization = undefined;
      next();
    } else {
      return next(new ErrorHandler("Unautharise access", 401));
    }
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
