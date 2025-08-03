import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import Profile from './components/Profile';

// Context
import { AuthProvider } from './context/AuthContext';

// Utils
import { config } from './utils/config.js';
import api from './utils/api.js';

function App() {
  // Log environment info on app start
  useEffect(() => {
    console.log('🚀 App Environment:', {
      frontendUrl: config.FRONTEND_URL,
      backendUrl: config.BACKEND_URL,
      apiBaseUrl: config.API_BASE_URL,
      environment: config.IS_DEVELOPMENT ? 'Development' : 'Production',
      appName: config.APP_NAME,
      version: config.APP_VERSION
    });
    
    // Health check on app start
    api.get('/')
      .then(response => {
        console.log('✅ Backend API is running:', response.data);
      })
      .catch(error => {
        console.error('❌ Backend API connection failed:', error.message);
      });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/edit-blog/:id" element={<EditBlog />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
