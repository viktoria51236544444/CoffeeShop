import React from "react";
import MainRoutes from "./routes/MainRoutes";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";
import OurBlog from "./homepage/OurBlog";

const App = () => {
  return (
    <div>
      {/* <OurBlog />
      <ReserveTable />
      <Recomended /> */}
      <MainRoutes />
    </div>
  );
};

export default App;
