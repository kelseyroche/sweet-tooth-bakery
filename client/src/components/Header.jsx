
// import { Link as RouterLink } from "react-router-dom";
// // import { Link } from "react-scroll"; // 👈 you can remove this if unused

// function Header({ scrollToAbout, scrollToContact }) {
//   return (
//     <header className="main-header">
//       <img src="/assets/logo.png" alt="Bakery Logo" className="bakery-logo" />
//       <nav>
//         <button onClick={scrollToAbout}>About</button>
//         <button onClick={scrollToContact}>Contact</button>
//         <RouterLink to="/menu">Menu</RouterLink>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <img src="/logo1.png" alt="Bakery Logo" className="bakery-logo" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/#about">About</RouterLink>
        <RouterLink to="/#contact">Contact</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
      </nav>
    </header>
  );
}

export default Header;