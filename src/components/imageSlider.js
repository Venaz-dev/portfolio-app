import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import projectInfo from './projectInfo'

import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import "./imageSlider.style.css";

SwiperCore.use([Navigation, Scrollbar, Pagination]);



  

export default function ImageSlider() {
  let { id } = useParams();

  const project = projectInfo.filter( p => (
    p.title.toLowerCase().includes(id.toLowerCase())
  ))
    
  const [info, setInfo] = useState(project)
  
    console.log('hello', project)
    console.log('hi', info)
  

  
  
  const skills = info[0].skills.map( skill => 
    <p className="skill">{skill}</p>
  )

  return (
    <div>
      <div className="slider-container">
        <div className="project-details-container">
          
          <div className="project-details">
            <p className=" project-details-text">
              {info[0].description}
            </p>
            <div className="project-details-skill">
              <p className="skill-title"> Skills: </p>
              <div className="skill-container">
                {
                  skills
                }
              </div>
            </div>
            <div className="project-links">
              <a className="link" href={info[0].live_link}>
                Go to Site
              </a>
              <a className="link" href={info[0].github_link}>
                Code on Github
              </a>
            </div>
          </div>
          <div className="project-image-slider">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {info[0].slider.map(slide =>
                <SwiperSlide>
                <div className="test">
                  <img src={slide} alt="slide"></img>
                </div>
              </SwiperSlide>
                )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
