// Configuration utility for environment variables
export const config = {
  // Frontend URLs
  FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173',
  
  // Backend URLs
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  
  // API Endpoints
  AUTH_API: `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}/auth`,
  BLOGS_API: `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}/blogs`,
  USERS_API: `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}/users`,
  
  // Environment
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,
  
  // App Info
  APP_NAME: 'BlogHub',
  APP_VERSION: '1.0.0'
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${config.API_BASE_URL}${endpoint}`;
};

// Helper function to get current environment
export const getEnvironment = () => {
  if (config.IS_DEVELOPMENT) return 'development';
  if (config.IS_PRODUCTION) return 'production';
  return 'unknown';
};

export default config; 