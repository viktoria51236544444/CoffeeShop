import React from "react";
import MainRoutes from "./routes/MainRoutes";
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
