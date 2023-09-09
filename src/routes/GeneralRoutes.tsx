import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LandingPage from '../view/LandingPage';
import AboutDetail from '../components/about/AboutDetail';
import Login from '../components/login/Login';


const routes = [
    {
      path: '/',
      component: <LandingPage></LandingPage>,
    },
    {
      path:'/about-us',
      component: <AboutDetail></AboutDetail>
    },
    {
      path:'/login',
      component: <Login></Login>
    }
  ];
function GeneralRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default GeneralRoutes;