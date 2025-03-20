import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientID="153175497421-jnt481jrpguif6qpgk0os9gitvdltfao.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
