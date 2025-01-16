import "./Header.scss";
import logo from "../media/eua-logo.svg";
const Header = () => {
  return (
    <header>
      <img src={logo} />
      <nav>Manufacturer</nav>
      <nav>Knowledge Hub</nav>
      <nav>About us</nav>
      <nav>Contact us</nav>

      <p>+44 1785 303300</p>
    </header>
  );
};

export default Header;
