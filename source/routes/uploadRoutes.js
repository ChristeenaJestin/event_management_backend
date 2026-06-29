import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import {
  uploadFile,
  deleteFile,
} from "../controllers/uploadController.js";

const router = express.Router();

/*
POST /api/upload

Allowed Roles:
- ORGANIZER
- ADMIN
- SUPER_ADMIN
*/

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  upload.single("image"),
  uploadFile
);

/*
DELETE /api/upload/:fileKey

Allowed Roles:
- ORGANIZER
- ADMIN
- SUPER_ADMIN
*/

router.delete(
  "/:fileKey",
  authMiddleware,
  roleMiddleware("ORGANIZER", "ADMIN", "SUPER_ADMIN"),
  deleteFile
);

export default router;