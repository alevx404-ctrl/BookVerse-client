import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { AuthProvider } from './context/AuthContext';
import './index.css';
// Importing the Toaster component for toast notifications
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
      <Toaster position="top-right" />
    </AuthProvider>
  </React.StrictMode>
);