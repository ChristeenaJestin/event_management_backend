import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";

const authMiddleware = (req, res, next) => {

  try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

      logger.warn("Authorization token missing");

      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided."
      });

    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {

    logger.error(error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token"
    });

  }

};

export default authMiddleware;