import React from "react";

import Navbar from "./homepage/Navbar";
import Header from "./homepage/Header";
import PapularMenu from "./homepage/PapularMenu";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <PapularMenu />
    </div>
  );
};

export default App;
