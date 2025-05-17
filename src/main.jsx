import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add smooth scrolling polyfill for Safari
if (!('scrollBehavior' in document.documentElement.style)) {
  import('scroll-behavior-polyfill')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
