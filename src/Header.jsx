import "./Header.css";

function Header({ title, nav1, nav2, nav3, nav4 }) {
  return (
    <header id="header" className="header">
      <div className="logo-layout">
        <a href="#top">
          <h1 className="header-title">
            <img className="shop-icon" src="/src/assets/shop.svg" alt="" />
            {title}
          </h1>
        </a>
      </div>
      <nav className="nav-links">
        <a href="#top">
          {nav1}
          <img className="nav-icon" src="/src/assets/home.svg" alt="" />
        </a>
        <a href="#products">
          {nav2}
          <img className="nav-icon" src="/src/assets/product.svg" alt="" />
        </a>
        <a href="#reviews">
          {nav3}
          <img className="nav-icon" src="/src/assets/review.svg" alt="" />
        </a>
        <a href="#contact">
          {nav4}
          <img className="nav-icon" src="/src/assets/phone.svg" alt="" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
