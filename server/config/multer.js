const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpg|jpeg|png|webp|pdf|doc|docx|txt|mp3|wav|m4a/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype =
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("audio/") ||
    file.mimetype === "application/pdf" ||
    file.mimetype === "text/plain" ||
    file.mimetype.includes("word") ||
    file.mimetype.includes("officedocument");

  if (extname || mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only images, documents, and audio files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;