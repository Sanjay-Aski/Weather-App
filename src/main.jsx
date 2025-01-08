import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-yellow-100 dark:bg-slate-900 dark:text-yellow-50'>
    <App />
    </div>
  </StrictMode>,
)
