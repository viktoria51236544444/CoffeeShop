import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import ProductList from "../components/product/ProductList";


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {id: 1, link: "/edit", element: <EditPage/> },
    {id: 2, link: "/admin", element: <AdminPage/>},
    {id: 3, link: "/products", element: <ProductList/>}
  ]
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem)=>(
        <Route path={elem.link} key={elem.id} element={elem.element} />
      ))}
    </Routes>
  )
};

export default MainRoutes;
