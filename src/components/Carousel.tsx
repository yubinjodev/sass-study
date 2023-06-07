'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../../styles/components/_carousel.scss';

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  return (
    
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className="carousel"
      >
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/babadog.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/gs.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/icandy.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/jamestown.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/kik.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/opex-press.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/siacoin.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/teledeporte.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/vip.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src="/images/intro/brands/volvo.svg" />
        </SwiperSlide>
      </Swiper>
  );
}
