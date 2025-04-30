// import React from "react";
// import HomePage from "./components/HomePage";
// import Menu from "./components/Menu";
// import About from "./components/About";
// import Contact from "./components/Contact";



// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//       <Menu />
//       <About />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;