# BhashaLens AI

BhashaLens AI is a full-stack multilingual file analysis web application built for educational and portfolio purposes. It allows users to upload documents, images, and audio files and simulates AI-based language understanding by generating extracted content, detected language, and summarized output.

## Features

- User Authentication (Signup / Login)
- JWT-based Protected Routes
- File Upload System
- Simulated AI Language Processing
- Extracted Text Display
- Language Detection Output
- AI Summary Generation
- Upload History Dashboard
- MongoDB Atlas Database Integration
- Premium Responsive UI with Beige / Ivory Theme

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer (File Uploads)
- bcryptjs

## Folder Structure

```bash
bhashalens-ai/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   └── server.js
│
├── assets/
├── docs/
├── ml-service/
└── README.md