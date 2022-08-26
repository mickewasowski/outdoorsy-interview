import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CamperProvider} from './contexts/CamperContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CamperProvider>
      <App />
    </CamperProvider>
  </React.StrictMode>
)
