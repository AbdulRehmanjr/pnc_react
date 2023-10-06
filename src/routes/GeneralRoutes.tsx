import { Route,Routes, useLocation} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AboutDetail from '../components/general/landing/about/AboutDetail';
import BecomeSeller from '../components/seller/BecomeSeller';
import Header from '../components/general/header/Header';
import Login from '../components/general/login/Login';
import Signup from '../components/general/login/Signup';
import { useState, useEffect } from 'react';
import SellerRequestForm from '../components/seller/SellerRequestForm';
import AdminDashboard from '../pages/AdminDashboard';
import ShopPage from '../pages/ShopPage';
import { SellerDashboard } from '../pages/SellerDashbaord';
import ContactUs from '../components/general/landing/team/Contactus';


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
      path:'/seller-dashboard/*',
      component:SellerDashboard
    },
    {
      path:'/shop/*',
      component: ShopPage
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