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
  

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
   //   <Testimonials />
      <Contact />
    </>
  );
}

export default App;
