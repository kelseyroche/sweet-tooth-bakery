
// import React, { useRef } from "react";
// import { Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";
// import "./App.css";

// function App() {
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToAbout = () => {
//     aboutRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToContact = () => {
//     contactRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <Header scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HomePage />
//               <section ref={aboutRef}>
//                 <About />
//               </section>
//               <section ref={contactRef}>
//                 <Contact />
//               </section>
//             </>
//           }
//         />
//         <Route path="/menu" element={<Menu />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Reviews from './components/Reviews';

import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash === "#about") {
        setTimeout(() => {
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay lets the component render first
      } else if (location.hash === "#contact") {
        setTimeout(() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <section ref={aboutRef} id="about">
              <About />
              </section>
              <div className="section-divider"></div>
              <section ref={contactRef} id="contact">
              <Reviews />
              <div className="section-divider"></div>
              <Contact />
              </section>
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;