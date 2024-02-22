import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import ProductList from "../components/product/ProductList";
import Menu from "../homepage/Menu";
import Cart from "../components/cart/Cart";
import PaymentForm from "../components/paymentForm/PaymentForm";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/edit", element: <EditPage /> },
    { id: 2, link: "/admin", element: <AdminPage /> },
    { id: 3, link: "/products", element: <ProductList /> },
    { id: 4, link: "/menu", element: <Menu /> },
    { id: 5, link: "/cart", element: <Cart /> },
    { id: 6, link: "/payment", element: <PaymentForm /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} key={elem.id} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
