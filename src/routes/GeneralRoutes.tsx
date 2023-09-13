import { Route,Routes } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import AboutDetail from '../components/about/AboutDetail';
import Signup from '../components/login/Signup';
import Login from '../components/login/Login';
import ContactUs from '../components/team/Contactus';
import BecomeSeller from '../components/seller/BecomeSeller';


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
      path: '/become-seller',
      component: BecomeSeller
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