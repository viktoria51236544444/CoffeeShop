import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import ProductPage from "../pages/ProductPage";
import Menu from "../homepage/Menu";
import Cart from "../components/cart/Cart";
import PaymentForm from "../components/paymentForm/PaymentForm";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/edit/:id", element: <EditPage /> },
    { id: 2, link: "/edit/:id", element: <EditPage /> },
    { id: 3, link: "/admin", element: <AdminPage /> },
    { id: 4, link: "/products", element: <ProductPage /> },
    { id: 5, link: "/menu", element: <Menu /> },
    { id: 6, link: "/cart", element: <Cart /> },
    { id: 7, link: "/payment", element: <PaymentForm /> },
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
