import React from "react";
import EditPage from "../components/pages/EditPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../components/pages/AdminPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {id: 1, link: "/", element: <EditPage/> },
    {id: 2, link: "/admin", element: <AdminPage/>}
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
