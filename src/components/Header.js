import "./Header.scss";
import logo from "../media/eua-logo.svg";
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src={logo} className="logo" />
        <nav>
          <a>
            Manufacturer<i class="fa-solid fa-chevron-down"></i>
          </a>

          <a>
            Knowledge Hub<i class="fa-solid fa-chevron-down"></i>
          </a>
          <a>About us</a>
          <a>Contact us</a>
        </nav>

        <i class="fa-solid fa-phone icon"></i>
        <p className="phone-number">+44 1785 303300</p>

        <div className="header-search-container">
          <input
            type="text"
            className="header-input"
            placeholder="Search Part No"
          />
          <div className="search-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <span className="language">EN</span>
        <i class="fa-solid fa-globe icon"></i>
      </div>
    </header>
  );
};

export default Header;
