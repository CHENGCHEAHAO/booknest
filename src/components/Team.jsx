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
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.jpg";
import CYC from "../assets/CYC.png";
import GYX from "../assets/GYX.jpg";
import CJY from "../assets/CJY.jpg";
import CCH from "../assets/CCH.jpg";

const Member = [
  {
    id: 5001,
    img: CYC,
    name: "Choong Yew Chung",
    position: "CEO",
    desc: "He passionately leads the company in revolutionizing book access. With strategic thinking and a commitment to sustainability, he fosters a culture of creativity and customer satisfaction.",
    linkedin: "https://www.linkedin.com/in/choong-yew-chung-9b8449255/",
    ig: "https://www.instagram.com/yew07?igsh=MWV6bWE2ZXI5eW1raA%3D%3D&utm_source=qr",
  },
  {
    id: 5002,
    img: GYX,
    name: "Go Yao Xiang",
    position: "CFO",
    desc: "He is a finance expert optimizing financial processes and ensuring fiscal stability. His keen eye for detail contributes to successful negotiations and sustainable growth.",
    linkedin: "https://www.linkedin.com/in/go-yao-xiang-a54aa1255/",
    ig: "https://www.instagram.com/yao_xiang_0115/",
  },
  {
    id: 5003,
    img: CJY,
    name: "Choong Jun Yang",
    position: "CTO",
    desc: "He leads Book Nest's technological strategy, ensuring secure, scalable platforms. His expertise in emerging technologies keeps the company at the forefront, enhancing the digital reading experience.",
    linkedin: "https://www.linkedin.com/in/choong-jun-yang-07896b256",
    ig: "https://www.instagram.com/jun_yang___/",
  },
  {
    id: 5004,
    img: CCH,
    name: "Cheng Chea Hao",
    position: "CMO",
    desc: "He shapes Book Nest's brand image with innovative campaigns. His deep understanding of consumer behavior and storytelling keeps the company at the forefront of the book rental industry.",
    linkedin: "https://www.linkedin.com/in/cheng-chea-hao/",
    ig: "https://www.instagram.com/cch.0303/",
  },
];

const Team = () => {
  return (
    <section className="team" id="team">
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
          className="card-wrapper">
          {Member.map((item) => {
            const { id, img, name, position, desc, linkedin, ig } = item;
            return (
              <SwiperSlide key={id}>
                <div className="card">
                  <div
                    className="card-img"
                    style={{ backgroundImage: `url("${img}")` }}></div>
                  <div className="card-content">
                    <div className="card-name">{name}</div>
                    <div className="card-position">{position}</div>
                    <div className="card-desc">{desc}</div>
                    <div className="card-social">
                      <a href={linkedin}>
                        <img src={Linkedin} alt="linkedin" />
                      </a>
                      <a href={ig}>
                        <img src={Instagram} alt="instagram" />
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
