import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Features from "./Components/Features/Features";


function App() {
  return (
    <div className="w-full h-auto bg-bodycolor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
      <Banner />
      <Features />
      </div>
    </div>
  );
}

export default App;
