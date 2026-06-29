import {
  loginService,
  registerService,
} from "../services/authService.js";

export const register = async (req, res) => {
  try {

    const user = await registerService(req.body);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

export const login = async (req, res) => {
  try {

    const result = await loginService(req.body);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token: result.token,
      user: result.user,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};

export const logout = (req, res) => {

  res.status(200).json({
    success: true,
    message: "Logout Successful",
  });

};