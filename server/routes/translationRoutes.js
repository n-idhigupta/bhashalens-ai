const express = require("express");
const router = express.Router();

const upload = require("../config/multer");
const {
  uploadAndProcessFile,
  getUserTranslations,
} = require("../controllers/translationController");

const { protect } = require("../middleware/authMiddleware");

router.post("/upload", protect, upload.single("file"), uploadAndProcessFile);
router.get("/history", protect, getUserTranslations);

module.exports = router;