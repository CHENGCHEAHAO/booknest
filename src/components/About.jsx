import "../styles/About.css";
import abtVid from "../assets/about.mp4";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-title">About Us</div>
        <div className="about-desc">
          BookNest, your gateway to a world of literary exploration and
          community connection! At BookNest, we believe in the magic of stories
          and the transformative power of reading.
        </div>
        <a className="about-team-btn" href="#team">
          Our Team
        </a>
      </div>
      <div className="about-vid">
        <video src={abtVid} autoplay="true" controls="controls" loop muted />
      </div>
    </section>
  );
};

export default About;
