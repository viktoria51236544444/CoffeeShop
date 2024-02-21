import React from "react";
// import Navbar from "./homepage/Navbar";
// import Header from "./homepage/Header";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";
import ReviewSection from "./homepage/ReviewSection";
import MainRoutes from "./routes/MainRoutes";
import Subscribe from "./homepage/Subscribe";
import OurBlog from "./homepage/OurBlog";
import Footer from "./homepage/Footer";

const App = () => {
  return (
    <div>
      <OurBlog />
      <ReserveTable />

      <Recomended />
      <ReviewSection />
      <Subscribe />
      <Footer />

      <MainRoutes />
    </div>
  );
};

export default App;
