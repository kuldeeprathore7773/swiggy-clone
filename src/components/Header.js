import { LOGO_URL } from "../utils/constants";

function Header() {
  return (
    <div className="header-main">
      <div className="container">
        <div className="header-inner">
          <div className="logo-container">
            <img alt="main-logo" className="logo-img" src={LOGO_URL} />
          </div>
          <nav className="main-nav">
            <ul>
              <li>Swiggy Corporate</li>
              <li>Search</li>
              <li>Offers</li>
              <li>Help</li>
              <li>Sign In</li>
              <li>Cart</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
