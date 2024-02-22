import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./homepage/Navbar";
import Header from "./homepage/Header";
import MainContentBlock1 from "./homepage/MainContentBlock1";
import Recomended from "./homepage/Recomended";
import ReserveTable from "./homepage/ReserveTable";
import OurBlog from "./homepage/OurBlog";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MainContentBlock1 />
      <Recomended />
      <ReserveTable />
      <OurBlog />
      <MainRoutes />
    </div>
  );
};

export default App;
