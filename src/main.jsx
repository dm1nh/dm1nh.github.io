import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app.jsx'
import './styles/globals.css'
import AppProvider from './lib/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
