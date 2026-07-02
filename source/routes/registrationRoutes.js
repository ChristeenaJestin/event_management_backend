import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  register,
  getParticipants,
} from "../controllers/registrationController.js";

const router = express.Router();

router.post(
  "/:id/register",
  authMiddleware,
  roleMiddleware("USER", "ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  register
);

router.get(
  "/:id/participants",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  getParticipants
);

export default router;