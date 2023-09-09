import './App.css'
import Header from './components/header/Header'

import GeneralRoutes from './routes/GeneralRoutes'

function App() {
  
  return (
    <>
    <div className="container-fluid">
      <Header></Header>
     <GeneralRoutes></GeneralRoutes>
    </div>
    </>
  )

}

export default App
