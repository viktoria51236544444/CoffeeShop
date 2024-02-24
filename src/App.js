import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./homepage/Navbar";
import Recomended from "./homepage/Recomended";

import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <div>
      <MainRoutes />
      {/* <AuthPage /> */}
    </div>
  );
};

export default App;
