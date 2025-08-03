import React from 'react';
import { config } from '../utils/config.js';

const EnvironmentInfo = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">🌐 Environment Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        <div>
          <span className="font-medium">Frontend URL:</span> {config.FRONTEND_URL}
        </div>
        <div>
          <span className="font-medium">Backend URL:</span> {config.BACKEND_URL}
        </div>
        <div>
          <span className="font-medium">API Base URL:</span> {config.API_BASE_URL}
        </div>
        <div>
          <span className="font-medium">Environment:</span> {config.IS_DEVELOPMENT ? 'Development' : 'Production'}
        </div>
        <div>
          <span className="font-medium">App Name:</span> {config.APP_NAME}
        </div>
        <div>
          <span className="font-medium">Version:</span> {config.APP_VERSION}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentInfo; 