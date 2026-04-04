const path = require("path");
const Translation = require("../models/Translation");

const uploadAndProcessFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileName = req.file.originalname;
    const fileExt = path.extname(fileName).toLowerCase();

    let detectedType = "Unknown";
    let extractedText = "Sample extracted content from uploaded file.";
    let detectedLanguage = "Hindi";
    let summary =
      "This is a mock AI-generated summary of the uploaded content. Real OCR / diarization / translation will be integrated in the next phase.";

    if ([".png", ".jpg", ".jpeg", ".webp"].includes(fileExt)) {
      detectedType = "Image";
      extractedText =
        "Mock OCR output: यह एक नमूना टेक्स्ट है जो इमेज से निकाला गया है।";
      detectedLanguage = "Hindi";
      summary =
        "The uploaded image appears to contain Hindi text. OCR extraction and language understanding were simulated successfully.";
    } else if ([".mp3", ".wav", ".m4a"].includes(fileExt)) {
      detectedType = "Audio";
      extractedText =
        "Mock diarization transcript: Speaker 1 introduced the topic, and Speaker 2 responded with supporting context.";
      detectedLanguage = "Punjabi / Hindi Mixed";
      summary =
        "The uploaded audio appears to include multi-speaker conversation in mixed Indian languages.";
    } else if ([".pdf", ".doc", ".docx", ".txt"].includes(fileExt)) {
      detectedType = "Document";
      extractedText =
        "Mock document extraction: This file contains structured textual content ready for AI processing.";
      detectedLanguage = "English";
      summary =
        "The uploaded document was successfully interpreted as text-ready input for analysis.";
    }

    const savedResult = await Translation.create({
      user: req.user._id,
      fileName,
      fileType: detectedType,
      extractedText,
      detectedLanguage,
      summary,
      uploadedAt: new Date(),
    });

    res.status(200).json(savedResult);
  } catch (error) {
    console.error("Upload Processing Error:", error);
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