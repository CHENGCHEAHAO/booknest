import "../styles/Footer.css";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
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
  { id: 8001, title: "Home" },
  { id: 8002, title: "Books" },
  { id: 8003, title: "About" },
  { id: 8004, title: "News" },
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
                <li key={id}>
                  <div
                    className="contact-symbol"
                    style={{
                      backgroundImage: `url("${img}")`,
                    }}
                  ></div>
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
            <div className="input-section">your email address</div>
            <div className="sign-up-section">sign up</div>
          </div>

          <ul>
            <li>
              <Linkedin className="social-icon" />
            </li>
            <li>
              <Facebook className="social-icon" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
