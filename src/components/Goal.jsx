import "../styles/Goal.css";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import value from "../assets/value.png";
import video from "../assets/video.mp4";

const list = [
  {
    id: 1001,
    img: mission,
    title: "Mission",
    desc: "Revolutionize knowledge by providing convenient e-book rental service",
  },
  {
    id: 1002,
    img: vision,
    title: "Vision",
    desc: "To be the foremost provider of accessible and affordable e-book",
  },
  {
    id: 1003,
    img: value,
    title: "Values",
    desc: "Accessibility and Innovation is the value we believe in our company",
  },
];

const Goal = () => {
  return (
    <section className="goal">
      <div className="goal-wrapper">
        <video src={video} autoplay="autoplay" muted="muted" loop />
        <ul>
          {list.map((item) => {
            const { id, img, title, desc } = item;
            return (
              <li key={id}>
                <div
                  className="goal-icon"
                  style={{
                    backgroundImage: `url("${img}")`,
                  }}></div>
                <div className="goal-title">{title}</div>
                <div className="goal-desc">{desc}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Goal;
