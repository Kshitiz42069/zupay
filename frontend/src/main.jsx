import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './components/context/AuthContext.jsx'
import { PostContextProvider } from './components/context/PostContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthContextProvider>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </AuthContextProvider>
  </StrictMode>
)
