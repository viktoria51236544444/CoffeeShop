import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Subscribe from "./homepage/Subscribe";
import OurBlog from "./homepage/OurBlog";
import Footer from "./homepage/Footer";
import ReserveTable from "./homepage/ReserveTable";
import Recomended from "./homepage/Recomended";
import ReviewSection from "./homepage/ReviewSection";
import Navbar from "./homepage/Navbar";
import Header from "./homepage/Header";
import MainContentBlock1 from "./homepage/MainContentBlock1";
import Cart from "./components/cart/Cart";
import PapularMenu from "./homepage/PapularMenu";
import Comments from "./homepage/Comments";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Header />
      <MainContentBlock1 />
      <ReserveTable />
      <Recomended />
      <PapularMenu />
      <OurBlog />
      <ReviewSection />
      <Subscribe />
      <Footer /> */}
      <MainRoutes />
      <Comments />
    </div>
  );
};

export default App;
