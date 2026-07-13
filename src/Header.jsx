import "./Header.css"
function Header({ title, nav1, nav2, nav3, nav4 }) {
  return (
    <header
      style={{
        backgroundColor: "#2b74c2",
        color: "#fff",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5em" }}>{title}</h1>
      <nav style={{ display: "flex", gap: "16px" }}>
        <a href="#">{nav1}</a>
        <a href="#">{nav2}</a>
        <a href="#">{nav3}</a>
        <a href="#">{nav4}</a>
      </nav>
    </header>
  );
}

export default Header;