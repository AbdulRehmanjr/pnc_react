import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "../components/shop/ProductDetail";
import { ProductList } from "../components/shop/ProductList";

interface IRoutes {
  path: string
  component: () => JSX.Element
}
const ShopRoutes = () => {

  const routes: IRoutes[] = [
    {
      path: '/',
      component: ProductList
    },
    {
      path:'/product-detail',
      component :  ProductDetail
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

export default ShopRoutes;