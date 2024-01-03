import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="ebook-wrapper">
        <div className="ebook-img"></div>
        <div className="text-wrapper">
          <div className="ebook-text">BOOKNEST</div>
          <div className="ebook-text">BOOKNEST</div>
          <div className="ebook-text">BOOKNEST</div>
        </div>
      </div>

      <div className="desc-wrapper">
        <div className="company-desc">
          <div className="company-logo"></div>
          <div className="company-slogan">
            "Read. Return. Discuss. Unleash the Power of Shared Stories with
            BookNest!"
          </div>
        </div>

        <div className="description">
          Welcome to BookNest, where the world of books meets the convenience of
          online rental services! At BookNest, we are passionate about fostering
          a love for reading and making it accessible to everyone. Imagine
          having a vast library at your fingertips, with the flexibility to
          explore a diverse range of books without the commitment of permanent
          ownership.
        </div>
      </div>
    </section>
  );
};

export default Hero;
