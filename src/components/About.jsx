import "../styles/About.css";
import about from "../assets/about.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-title">About Us</div>
        <div className="about-desc">
          BookNest, your gateway to a world of literary exploration and
          community connection! At BookNest, we believe in the magic of stories
          and the transformative power of reading.
        </div>
        <a className="about-team-btn" href="#Team">
          Our Team
        </a>
      </div>
      <div className="about-img"></div>
    </section>
  );
};

export default About;
