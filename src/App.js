import React from "react";
import "./App.scss";
// Import Simple React Lightbox
import SimpleReactLightbox from "simple-react-lightbox";

//Components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Customers from "./components/Customers/Customers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Testimonials/>
      <SimpleReactLightbox>
        <Customers/>
      </SimpleReactLightbox>
      <Footer/>
    </div>
  );
}

export default App;
