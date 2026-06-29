import { body, validationResult } from "express-validator";

export const eventValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("venue")
    .trim()
    .notEmpty()
    .withMessage("Venue is required"),

  body("banner_url")
    .optional()
    .isURL()
    .withMessage("Banner URL must be valid"),

  body("start_date")
    .notEmpty()
    .withMessage("Start date is required")
    .isISO8601()
    .withMessage("Invalid start date"),

  body("end_date")
    .notEmpty()
    .withMessage("End date is required")
    .isISO8601()
    .withMessage("Invalid end date"),

  body("max_participants")
    .isInt({ min: 1 })
    .withMessage("Maximum participants must be at least 1"),

  body("registration_deadline")
    .notEmpty()
    .withMessage("Registration deadline is required")
    .isISO8601()
    .withMessage("Invalid registration deadline"),

  body("status")
    .optional()
    .isIn([
      "UPCOMING",
      "ONGOING",
      "COMPLETED",
      "CANCELLED",
    ])
    .withMessage("Invalid status"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];