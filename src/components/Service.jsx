import "../styles/Service.css";

const list = [
  {
    id: 1,
    num: "01",
    title: "Online eBook Rental Services",
    desc: "Immerse yourself in the digital realm of literature with BookNest Rentals. Explore our extensive collection of online eBooks across genres, delivered instantly to your device. Enjoy flexible rental plans, read at your own pace, and return effortlessly for your next captivating read. BookNest Rentals makes digital reading accessible, affordable, and tailored to your preferences.",
  },
  {
    id: 2,
    num: "02",
    title: "BookNest Community Forum",
    desc: "Join the BookNest community, where digital book lovers connect and share. Discuss your favorite eBooks, discover recommendations, and participate in author Q&A sessions. BookNest's Community Forum is where the joy of digital reading meets vibrant discussions, creating a space for literary enthusiasts to unite and explore the world of eBooks together. ",
  },
];

const Service = () => {
  return (
    <section className="service">
      <div className="service-wrapper">
        <div className="service-title">Our Services</div>
        <ul className="service-content">
          {list.map((item) => {
            const { id, num, title, desc } = item;
            return (
              <li key={id} value={id} className="service-li-element">
                <div className="element-num">{num}</div>
                <div className="element-title">{title}</div>
                <div className="element-desc">{desc}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Service;
