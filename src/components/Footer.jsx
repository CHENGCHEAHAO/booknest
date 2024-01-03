import "../styles/Footer.css";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";

const contacts = [
  {
    id: 9001,
    img: location,
    text: "2, Jalan Air Mas, Bayan Baru, Pulau Pinang, Malaysia",
  },
  {
    id: 9002,
    img: phone,
    text: "+60125345786",
  },
  {
    id: 9003,
    img: email,
    text: "BookNest@gmail.com",
  },
];

const menuList = [
  { id: 8001, title: "Home", destination: "home" },
  { id: 8002, title: "Books", destination: "books" },
  { id: 8003, title: "About", destination: "about" },
  { id: 8004, title: "News", destination: "news" },
];

const socialList = [
  { id: 7001, img: facebook },
  { id: 7002, img: linkedin },
];

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div className="contact-section">
          <div className="footer-section-title">CONTACT</div>
          <ul>
            {contacts.map((item) => {
              const { id, img, text } = item;
              return (
                <li key={id} className="">
                  <img src={img} alt="contact" className="contact-symbol" />
                  <div className="contact-details">{text}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="menu-section">
          <div className="footer-section-title">MENU</div>
          <ul>
            {menuList.map((item) => {
              const { id, title } = item;
              return (
                <li key={id} className="menu-list">
                  <a href="#">{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="newsletter-section">
          <div className="footer-section-title">NEWSLETTER</div>
          <div className="message-box">
            <div className="input-section">input email address</div>
            <div className="sign-up-section">sign up</div>
          </div>

          <ul>
            {socialList.map((item) => {
              const { id, img } = item;
              return (
                <li key={id} className="">
                  <img src={img} alt="social" className="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
