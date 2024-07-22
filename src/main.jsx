import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CheckProvider } from './hooks/useSome.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CheckProvider>

    <App />
    </CheckProvider>
  </React.StrictMode>,
)
