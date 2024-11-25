import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Contact />
      <FAQs />
    </div>
  );
}

export default App;
