import React from "react";
import MainRoutes from "./routes/MainRoutes";
import ReserveTable from "./homepage/ReserveTable";

const App = () => {
  return (
    <div>
      <ReserveTable />
      <MainRoutes />
    </div>
  );
};

export default App;
