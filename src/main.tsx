import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/index' // Points to your routes file
import './index.css'                  // Mounts your Tailwind styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)