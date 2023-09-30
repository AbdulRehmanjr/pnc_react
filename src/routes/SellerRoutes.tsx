import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "../components/shop/ProductDetail";
import { HomePage } from "../components/seller/dashboard/HomePage";
import { Communication } from "../components/general/communication/Communication";
import { Products } from "../components/seller/dashboard/Products";

interface IRoutes {
  path: string
  component: () => JSX.Element
}
const SellerRoutes = () => {

  const routes: IRoutes[] = [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/communication',
      component: Communication
    },
    {
      path:'/products',
      component:Products
    }
  ];

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

export default SellerRoutes;