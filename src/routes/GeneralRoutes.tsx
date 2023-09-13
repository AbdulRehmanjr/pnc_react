import { Route,Routes } from 'react-router-dom';
import LandingPage from '../view/LandingPage';
import AboutDetail from '../components/about/AboutDetail';
import Signup from '../components/login/Signup';
import Login from '../components/login/Login';
import ContactUs from '../components/team/Contactus';


const routes = [
    {
      path: '/',
      component: LandingPage,
    },
    {
      path:'/about-us',
      component: AboutDetail
    },
    {
      path:'/signup',
      component: Signup
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'contact-us',
      component:ContactUs
    }
  ];
function GeneralRoutes() {
    return (
      
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      
    );
  }
  
  export default GeneralRoutes;