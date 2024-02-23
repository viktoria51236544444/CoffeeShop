import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import ProductPage from "../pages/ProductPage";
import Menu from "../homepage/Menu";
import Cart from "../components/cart/Cart";
import PaymentForm from "../components/paymentForm/PaymentForm";
import Comments from "../homepage/Comments";
import Homepage from "../pages/Homepage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/edit/:id", element: <EditPage /> },
    { id: 2, link: "/admin", element: <AdminPage /> },
    { id: 3, link: "/products", element: <ProductPage /> },
    { id: 4, link: "/menu", element: <Menu /> },
    { id: 5, link: "/cart", element: <Cart /> },
    { id: 6, link: "/payment", element: <PaymentForm /> },
    { id: 7, link: "/comments", element: <Comments /> },
    // { id: 8, link: "/login", element: <Comments /> },
    // { id: 9, link: "/register", element: <Comments /> },
    { id: 10, link: "/", element: <Homepage /> },
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
