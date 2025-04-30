import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo">Sweet Tooth Bakery</h1>
      <nav>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        <button onClick={() => navigate("/menu")}>Menu</button>
      </nav>
    </header>
  );
}