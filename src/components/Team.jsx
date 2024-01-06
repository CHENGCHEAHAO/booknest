import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "../styles/Team.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.jpg";
import CYC from "../assets/CYC.png";
import GYX from "../assets/GYX.jpg";
import CJY from "../assets/CJY.jpg";
import CCH from "../assets/CCH.jpg";

const Member = [
  {
    id: 5001,
    tag: "card1",
    img: CYC,
    name: "Choong Yew Chung",
    position: "CEO",
    desc: "Description of the member’s role in this company just want to make it longer so it fit",
  },
  {
    id: 5002,
    tag: "card2",
    img: GYX,
    name: "Go Yao Xiang",
    position: "CFO",
    desc: "Description of the member’s role in this company just want to make it longer so it fit",
  },
  {
    id: 5003,
    tag: "card3",
    img: CJY,
    name: "Choong Jun Yang",
    position: "CTO",
    desc: "Description of the member’s role in this company just want to make it longer so it fit",
  },
  {
    id: 5004,
    tag: "card4",
    img: CCH,
    name: "Cheng Chea Hao",
    position: "CMO",
    desc: "Description of the member’s role in this company just want to make it longer so it fit",
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team-wrapper">
        <div className="title">Meet Our Team</div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="card-wrapper"
        >
          {Member.map((item) => {
            const { id, img, name, position, desc } = item;
            return (
              <SwiperSlide key={id}>
                <div className="card">
                  <div
                    className="card-img"
                    style={{ backgroundImage: `url("${img}")` }}
                  ></div>
                  <div className="card-content">
                    <div className="card-name">{name}</div>
                    <div className="card-position">{position}</div>
                    <div className="card-desc">{desc}</div>
                    <div className="card-social">
                      <a href="#">
                        <img src={linkedin} alt="linkedin" />
                      </a>
                      <a href="#">
                        <img src={instagram} alt="instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
