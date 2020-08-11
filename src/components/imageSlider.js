import React, { useState, useEffect } from "react";
import { useParams, Redirect, Route } from "react-router";
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
  


useEffect(() => {

  function test(){
    window.location = "/404";
  }
  if (project.length === 0){
    console.log("hello")
  test()
  }
}, [])

  let skills = null
  if (info.length > 0){
    skills = info[0].skills.map( skill => 
      <p className="skill">{skill}</p>)
  }

  
  
  

  return (
    <div>
      <div className="slider-container">
        <div className="project-details-container">
          
          <div className="project-details">
            <p className=" project-details-text">
              {info.length > 0 ? info[0].description : null}
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
              <a className="link" href={info.length > 0 ? info[0].live_link : null}>
                Go to Site
              </a>
              <a className="link" href={info.length > 0 ? info[0].github_link : null}>
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
              {info.length > 0 ? info[0].slider.map(slide =>
                <SwiperSlide>
                <div className="test">
                  <img src={slide} alt="slide"></img>
                </div>
              </SwiperSlide>
                ) : null}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
