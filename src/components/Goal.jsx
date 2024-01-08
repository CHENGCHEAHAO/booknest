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
    desc: "Description of mission I just want to make it longer so it fit",
  },
  {
    id: 1002,
    img: vision,
    title: "Vision",
    desc: "Description of mission I just want to make it longer so it fit",
  },
  {
    id: 1003,
    img: value,
    title: "Values",
    desc: "Description of mission I just want to make it longer so it fit",
  },
];

const Goal = () => {
  return (
    <section className="goal">
      <div className="goal-wrapper">
        <video src={video} autoplay="autoplay" muted="muted" loop="loop" />
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
