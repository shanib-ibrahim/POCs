import express from "express";
import { login, signUp, userInfo } from "../controllers/user.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post("/user", signUp);
router.post("/user/login", login);
router.get("/user", authMiddleware, userInfo);

export default router;
