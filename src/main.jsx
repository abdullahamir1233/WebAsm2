import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this imports your Tailwind or global CSS

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
