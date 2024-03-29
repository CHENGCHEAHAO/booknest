import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar" id="home">
      <div className="navbar-wrapper">
        <a href="#" className="menu"></a>
        <a href="#home" className="company">
          <div className="company-logo"></div>
          <div className="company-name">BOOKNEST</div>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
