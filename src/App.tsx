import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

import GeneralRoutes from './routes/GeneralRoutes'

function App() {

  return (
    <BrowserRouter>
    <div className="w-screen">
    <Header />
        {/* <GeneralRoutes /> */}
    </div>
    </BrowserRouter>
  )

}

export default App
