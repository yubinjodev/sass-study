'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../../styles/components/_carousel.scss';

// import required modules
import { Slide } from "@/features/home/Intro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type Props={
  className: string;
  slides: Slide[];
  type: string;
}

export default function Carousel(props:Props) {
  const {className, slides, type} = props;

  return (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className={className}
      >
       {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          {type ==="image" && <img alt={slide.name} src={slide.imgPath} />}
          {type==="text" && 
          <div className="block">
            <div className="block__review">{slide.review}</div>
            <div className="block__stars">
            <FontAwesomeIcon id="icon" icon={faStar} />
            <FontAwesomeIcon id="icon" icon={faStar} />
            <FontAwesomeIcon id="icon" icon={faStar} />
            <FontAwesomeIcon id="icon" icon={faStar} />
            <FontAwesomeIcon id="icon" icon={faStar} />
            </div>
            <div className="block__name">{slide.name}</div>
          </div>}
        </SwiperSlide>
       ))}
      </Swiper>
  );
}
