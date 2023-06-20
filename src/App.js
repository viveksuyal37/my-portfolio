import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Qualification from "./Components/Qualification/Qualification";
//import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader.js";

function App() {
  const [initalLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
  }, []);

  let Content = initalLoading ? (
    <Loader/>
  ) : (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      {/*   <Testimonials /> */}
      <Contact />
    </>

  );

  return ( Content );
}

export default App;
