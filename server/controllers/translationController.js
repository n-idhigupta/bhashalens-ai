const path = require("path");
const axios = require("axios");
const Translation = require("../models/Translation");

const uploadAndProcessFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileName = req.file.originalname;
    const fileExt = path.extname(fileName).toLowerCase();

    let detectedType = "Unknown";
    let mockInputText = "Sample extracted content from uploaded file.";

    if ([".png", ".jpg", ".jpeg", ".webp"].includes(fileExt)) {
      detectedType = "Image";
      mockInputText =
        "यह एक नमूना टेक्स्ट है जो इमेज से निकाला गया है।";
    } else if ([".mp3", ".wav", ".m4a"].includes(fileExt)) {
      detectedType = "Audio";
      mockInputText =
        "Speaker 1 introduced the topic, and Speaker 2 responded with supporting context.";
    } else if ([".pdf", ".doc", ".docx", ".txt"].includes(fileExt)) {
      detectedType = "Document";
      mockInputText =
        "This file contains structured textual content ready for AI processing.";
    }

    // Call deployed ML service
    const mlResponse = await axios.post(
      `${process.env.ML_SERVICE_URL}/analyze`,
      {
        text: mockInputText,
        fileName: fileName,
      }
    );

    const result = mlResponse.data;

    const savedResult = await Translation.create({
      user: req.user._id,
      fileName: result.fileName || fileName,
      fileType: detectedType,
      extractedText: result.extractedText,
      detectedLanguage: result.detectedLanguage,
      summary: result.summary,
      uploadedAt: new Date(),
    });

    res.status(200).json(savedResult);
  } catch (error) {
    console.error(
      "Upload Processing Error:",
      error.response?.data || error.message
    );
    res.status(500).json({ message: "File processing failed" });
  }
};

const getUserTranslations = async (req, res) => {
  try {
    const translations = await Translation.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json(translations);
  } catch (error) {
    console.error("Fetch History Error:", error);
    res.status(500).json({ message: "Failed to fetch history" });
  }
};

module.exports = { uploadAndProcessFile, getUserTranslations };