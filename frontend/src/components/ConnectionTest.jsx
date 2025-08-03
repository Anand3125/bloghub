import React, { useState, useEffect } from 'react';
import { config } from '../utils/config.js';
import api from '../utils/api.js';

const ConnectionTest = () => {
  const [status, setStatus] = useState('Testing...');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        setStatus('Connecting to backend...');
        const response = await api.get('/');
        setStatus('✅ Connected Successfully!');
        setDetails(response.data);
        setError(null);
      } catch (err) {
        setStatus('❌ Connection Failed');
        setError(err.message);
        setDetails(null);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">🔗 Backend Connection Test</h3>
      
      <div className="mb-2">
        <span className="font-medium">Status:</span> {status}
      </div>
      
      <div className="mb-2">
        <span className="font-medium">Backend URL:</span> {config.BACKEND_URL}
      </div>
      
      <div className="mb-2">
        <span className="font-medium">API Base URL:</span> {config.API_BASE_URL}
      </div>
      
      {details && (
        <div className="mt-3 p-3 bg-green-100 rounded">
          <h4 className="font-medium mb-1">Backend Response:</h4>
          <pre className="text-sm">{JSON.stringify(details, null, 2)}</pre>
        </div>
      )}
      
      {error && (
        <div className="mt-3 p-3 bg-red-100 rounded">
          <h4 className="font-medium mb-1">Error:</h4>
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectionTest; 