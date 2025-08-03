// 🌐 server.js
const express = require("express"); // 🚀 Express server
const dotenv = require("dotenv"); // 🔐 Environment variables
const cors = require("cors"); // 🌍 Cross-Origin Resource Sharing
const axios = require("axios"); // 🌐 HTTP requests
const cron = require("node-cron"); // ⏰ Cron job scheduler
const connectDB = require("./config/db"); // 🛢️ MongoDB connection
const authRoutes = require("./routes/authRoutes"); // 🔑 Auth routes
const blogRoutes = require("./routes/blogRoutes"); // ✍️ Blog routes
const userRoutes = require("./routes/userRoutes"); // 👤 User routes

// 🧪 Load env variables
dotenv.config();

// 🔌 Connect to MongoDB
connectDB();

const app = express();

// 🌐 CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:5173', // Development frontend
    'http://localhost:3000', // Alternative dev port
    'https://your-frontend-domain.com', // Production frontend (update this)
    'https://bloghub-frontend.onrender.com', // Render frontend (if deployed)
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); // 🌐 Enable CORS with options
app.use(express.json()); // 📨 Parse JSON

// 🛣️ Routes
app.use("/api/auth", authRoutes); // 🔑 Auth route handler
app.use("/api/blogs", blogRoutes); // 📚 Blog route handler
app.use("/api/users", userRoutes); // 👤 User route handler

// 🏠 Root route
app.get("/", (req, res) => {
  res.json({
    message: "📡 BlogHub API is running",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString()
  });
});

// ⏰ CRON JOB to keep server awake (every 14 minutes)
cron.schedule("*/14 * * * *", async () => {
  try {
    const response = await axios.get("https://bloghub-backend-l3v8.onrender.com/api/blogs"); // ✅ Use Render URL in production
    console.log(`⏰ Cron ping success: /api/blogs ✅ Status: ${response.status}`);
  } catch (error) {
    console.error("⚠️ Cron ping failed:", error.message);
  }
});

// 🟢 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Backend URL: https://bloghub-backend-l3v8.onrender.com`);
});
