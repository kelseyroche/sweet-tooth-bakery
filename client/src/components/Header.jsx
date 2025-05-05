
// import { Link as RouterLink } from "react-router-dom";

// function Header() {
//   return (
//     <header className="main-header">
//       <img src="/logo1.png" alt="Bakery Logo" className="bakery-logo" />
//       <nav>
//         <RouterLink to="/">Home</RouterLink>
//         <RouterLink to="/#about">About</RouterLink>
//         <RouterLink to="/#contact">Contact</RouterLink>
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
      <div className="logo-container">
        <img src="/logo1.png" alt="Sweet Tooth Bakery Logo" className="bakery-logo" />
      </div>
      <nav className="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/#about">About</RouterLink>
        <RouterLink to="/#contact">Contact</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
      </nav>
    </header>
  );
}

export default Header;