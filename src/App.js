import React from "react";
import { Brand, CTA, Navbar } from "./components";
import { Header, Blog, Feature, Footer, Possibility, What } from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
