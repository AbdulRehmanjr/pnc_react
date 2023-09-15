import { Route,Routes} from 'react-router-dom';
import HomePage from '../components/admin/HomePage';
import SellerRequests from '../components/admin/SellerRequest';


function AdminRoutes() {

    const routes = [
        {
          path: '/',
          component: HomePage,
        },
        {
          path:'/seller-request',
          component:SellerRequests
        }

      ];
    
    return (
      <>
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
  
  export default AdminRoutes;