import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen w-full'>
      <App />
    </div>
  </StrictMode>,
)
