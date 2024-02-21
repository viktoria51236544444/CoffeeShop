import React from "react";
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
