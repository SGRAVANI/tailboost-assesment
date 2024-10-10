import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import ContextState from './Components/Context/ContextState.jsx'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ContextState>
  <Auth0Provider
  
    domain="dev-82msy3um7k03cngv.us.auth0.com"
    clientId="tIunzTEyY7pbedmBmGsvrZBfdFzFdCnb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  {/* domain='dev-82msy3um7k03cngv.us.auth0.com'
  clientId='tIunzTEyY7pbedmBmGsvrZBfdFzFdCnb'
  redirectUri={window.location.origin}
   */}
  
    <App />
  </Auth0Provider>,
  </ContextState>
  </BrowserRouter>
)
