function Footer({ text }) {
  return (
    <footer
      style={{
        backgroundColor: "#0f0d0d",
        color: "#fff",
        textAlign: "center",
        padding: "12px",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.9em",
      }}
    >
      <p id="contact">
        <address>
          Mail me: <a href="mailto:myshop@gmail.com">myshop@gmail.com</a> <br />
          Phone: <a href="tel:+7681236612">+7681236612</a> <br />
        </address>
      </p>
      <p style={{ margin: 0 }}>{text}</p>
    </footer>
  );
}

export default Footer;
