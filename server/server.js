const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const translationRoutes = require("./routes/translationRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://bhashalens-ai-client.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("BhashaLens AI API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/translation", translationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});