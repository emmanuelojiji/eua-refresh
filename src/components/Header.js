import "./Header.scss";
import logo from "../media/eua-logo.svg";
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src={logo} className="logo" />
        <nav>
          <a>Manufacturer</a>
          <a>Knowledge Hub</a>
          <a>About us</a>
          <a>Contact us</a>
        </nav>

        <p>+44 1785 303300</p>
      </div>
    </header>
  );
};

export default Header;
