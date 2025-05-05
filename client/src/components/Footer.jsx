
// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-links">
//         <a href="#">Privacy</a>
//         <a href="#">Careers</a>
//         <a href="#">Blog</a>
//       </div>
//       <div className="footer-icons">
//         <a href="mailto:bakery@example.com">📧</a>
//         <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import emailIcon from '../assets/email.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
      </div>
      <div className="footer-icons">
        <a href="mailto:bakery@example.com">
          <img src={emailIcon} alt="Email" className="footer-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" className="footer-icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;