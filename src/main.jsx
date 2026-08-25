/*

Main est le point d'entrée de l'application

*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { FavorisProvider } from './context/FavorisContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter permet d'utiliser les routes et les liens de React Router dans toute l'application. */}
    <BrowserRouter>
    {/* FavorisProvider englobe App afin d'acceder aux favoris à toutes les pages */}
      <FavorisProvider>
        <App />
      </FavorisProvider>
    </BrowserRouter>
  </StrictMode>,
)
