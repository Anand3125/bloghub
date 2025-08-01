// 🌐 server.js
const express = require("express"); // 🚀 Express server
const dotenv = require("dotenv"); // 🔐 Environment variables
const cors = require("cors"); // 🌍 Cross-Origin Resource Sharing
const connectDB = require("./config/db"); // 🛢️ MongoDB connection
const authRoutes = require("./routes/authRoutes"); // 🔑 Auth routes
const blogRoutes = require("./routes/blogRoutes"); // ✍️ Blog routes
const userRoutes = require("./routes/userRoutes"); // 👤 User routes

dotenv.config(); // 🧪 Load env variables
connectDB(); // 🔌 Connect to DB

const app = express();
app.use(cors()); // 🌐 Enable CORS
app.use(express.json()); // 📨 Parse JSON

// 🛣️ Routes
app.use("/api/auth", authRoutes); // 🔑 Auth route handler
app.use("/api/blogs", blogRoutes); // 📚 Blog route handler
app.use("/api/users", userRoutes); // 👤 User route handler

// 🏠 Root route
app.get("/", (req, res) => {
  res.send("📡 BlogHub API is running");
});

// 🟢 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
