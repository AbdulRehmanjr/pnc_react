import { Route,Routes, useLocation} from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import AboutDetail from '../components/about/AboutDetail';
import ContactUs from '../components/team/Contactus';
import BecomeSeller from '../components/seller/BecomeSeller';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Signup from '../components/login/Signup';
import { useState, useEffect } from 'react';
import SellerRequestForm from '../components/seller/SellerRequestForm';
import AdminDashboard from '../page/AdminDashboard';


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
      path: '/become-seller',
      component: BecomeSeller
    },
    {
      path:'/admin-dashboard/*',
      component:AdminDashboard
    },
    {
      path:'/contact-us',
      component:ContactUs
    },
    {
      path:'/request',
      component: SellerRequestForm
    },
    {
      path: '/login',
      component: Login,
    },
    {
        path:'/signup',
        component: Signup
    }
   
  ];

  function AppHeader() {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(true);
  
    useEffect(() => {
      //* Check if the current path is '/login' or '/signup' and update showHeader accordingly
      setShowHeader(!['/login', '/signup'].includes(location.pathname));
    }, [location.pathname]);
    return showHeader ? <Header /> : null;
  }
  
function GeneralRoutes() {

    return (
      <>
      <AppHeader />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        </>
    );
  }
  
  export default GeneralRoutes;