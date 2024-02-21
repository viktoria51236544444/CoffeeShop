import React from "react";
// import Navbar from "./homepage/Navbar";
// import Header from "./homepage/Header";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";
import ReviewSection from "./homepage/ReviewSection";
import MainRoutes from "./routes/MainRoutes";

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
