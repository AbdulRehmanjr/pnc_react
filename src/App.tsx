import { BrowserRouter } from 'react-router-dom'
import './App.css'
import GeneralRoutes from './routes/GeneralRoutes'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
function App() {

  useEffect(() => {
     AOS.init()
  }, [])
  
  return (
      <BrowserRouter>
        <GeneralRoutes />
      </BrowserRouter>
  )

}

export default App
