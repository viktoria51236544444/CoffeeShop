import React from "react";
import MainRoutes from "./routes/MainRoutes";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";
import Navbar from "./homepage/Navbar";
import Header from "./homepage/Header";
import MainContentBlock1 from "./homepage/MainContentBlock1";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MainContentBlock1 />
      <ReserveTable />
      <Recomended />
      <MainRoutes />
    </div>
  );
};

export default App;
