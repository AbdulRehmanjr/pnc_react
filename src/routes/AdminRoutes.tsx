import { Route,Routes} from 'react-router-dom';
import HomePage from '../components/admin/HomePage';
import SellerRequests from '../components/admin/SellerRequest';
import Categories from '../components/admin/Category';

interface IRoutes{
  path:string
  component: () => JSX.Element
}
const  AdminRoutes = ()=> {

    const routes :IRoutes[] = [
        {
          path: '/',
          component: HomePage,
        },
        {
          path:'/seller-request',
          component:SellerRequests
        },
        {
          path:'category',
          component:Categories
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