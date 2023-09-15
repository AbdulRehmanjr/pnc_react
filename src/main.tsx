import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
                                  
import '@fontsource/roboto/500.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import './index.css'
import './fonts/fonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
