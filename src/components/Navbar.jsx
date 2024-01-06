import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar-wrapper">
        <a href="#" className="menu"></a>
        <a href="#" className="company">
          <div className="company-logo"></div>
          <div className="company-name">BOOKNEST</div>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
