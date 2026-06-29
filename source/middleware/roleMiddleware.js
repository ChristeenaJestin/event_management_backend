import logger from "../utils/logger.js";

const roleMiddleware = (...roles) => {

  return (req, res, next) => {

    if (!req.user) {

      logger.warn("Unauthorized request");

      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });

    }

    if (!roles.includes(req.user.role)) {

      logger.warn(
        `${req.user.email} tried to access restricted resource`
      );

      return res.status(403).json({
        success: false,
        message: "You don't have permission to perform this action."
      });

    }

    next();

  };

};

export default roleMiddleware;