import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./homepage/Navbar";

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
