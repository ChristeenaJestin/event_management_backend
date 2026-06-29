import logger from "../utils/logger.js";
import { errorResponse } from "../utils/responseHandler.js";

const errorMiddleware = (err, req, res, next) => {

  logger.error(err.message);

  errorResponse(
    res,
    err.status || 500,
    err.message || "Internal Server Error"
  );

};

export default errorMiddleware;