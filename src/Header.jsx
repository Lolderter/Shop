import "./Header.css"
function Header({ title, nav1, nav2, nav3, nav4 }) {
  return (
    <header id="header"
      
    >
      <h1 style={{ margin: 0, fontSize: "1.5em" }}>{title}</h1>
      <nav style={{ display: "flex", gap: "16px" }}>
        <a href="#top">{nav1}</a>
        <a href="#products">{nav2}</a>
        <a href="#reviews">{nav3}</a>
        <a href="#contact">{nav4}</a>
      </nav>
    </header>
  );
}

export default Header;