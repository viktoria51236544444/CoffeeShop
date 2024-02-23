import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Subscribe from "./homepage/Subscribe";
import OurBlog from "./homepage/OurBlog";
import Footer from "./homepage/Footer";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";
import ReviewSection from "./homepage/ReviewSection";
import Navbar from "./homepage/Navbar";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <OurBlog />
      <ReserveTable />

      <Recomended />
      <ReviewSection />
      <Subscribe />
      <Footer /> */}

      <MainRoutes />
    </div>
  );
};

export default App;
