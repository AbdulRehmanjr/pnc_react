import { Route,Routes} from 'react-router-dom';
import HomePage from '../components/admin/HomePage';


function AdminRoutes() {

    const routes = [
        {
          path: '/',
          component: HomePage,
        },

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