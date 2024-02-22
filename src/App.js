import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./homepage/Navbar";
import Comments from "./homepage/Comments";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Comments />
    </div>
  );
};

export default App;
