import express from "express";

import {
  register,
  login,
  logout,
} from "../controllers/authController.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);
router.post(
  "/register",
  registerValidator,
  register
);

router.post(
  "/login",
  loginValidator,
  login
);

export default router;