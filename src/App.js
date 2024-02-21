import React from "react";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";
import ReviewSection from "./homepage/ReviewSection";

import MainRoutes from "./routes/MainRoutes";
import Navbar from "./homepage/Navbar";

const App = () => {
  return (
    <div>
      <ReserveTable />

      <Recomended />
      <ReviewSection />

      <MainRoutes />
    </div>
  );
};

export default App;
