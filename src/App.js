import React from "react";

import MainRoutes from "./routes/MainRoutes";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";

const App = () => {
  return (
    <div>
      <ReserveTable />

      <Recomended />

      <MainRoutes />
    </div>
  );
};

export default App;
