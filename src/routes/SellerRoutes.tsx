import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "../components/shop/ProductDetail";
import { HomePage } from "../components/seller/dashboard/HomePage";

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
      path: '/product-detail',
      component: ProductDetail
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