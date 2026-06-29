import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} from "../controllers/eventController.js";
import { eventValidator } from "../validators/eventValidator.js";

const router = express.Router();

/*
USER
ORGANIZER
ADMIN
SUPER_ADMIN
*/

router.get("/", getAllEvents);

router.get("/:id", getEventById);

/*
Only Organizer/Admin/Super Admin
*/

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  createEvent
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  updateEvent
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  deleteEvent
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  eventValidator,
  createEvent
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  eventValidator,
  updateEvent
);
export default router;