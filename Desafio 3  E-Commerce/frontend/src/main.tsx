import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home';
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Home/>
  </StrictMode>,
)
