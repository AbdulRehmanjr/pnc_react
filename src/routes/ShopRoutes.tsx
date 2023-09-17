import { Routes, Route } from "react-router-dom";

interface IRoutes{
    path:string
    component: () => JSX.Element
  }
  const  ShopRoutes = ()=> {
  
      const routes :IRoutes[] = [
        
  
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
    
    export default ShopRoutes;