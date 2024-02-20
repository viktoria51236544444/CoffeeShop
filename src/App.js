import React from "react";
import Navbar from "./homepage/Navbar";
import Header from "./homepage/Header";

import MainRoutes from "./routes/MainRoutes";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ReserveTable />

      <Recomended />

      <MainRoutes />
    </div>
  );
};

export default App;
