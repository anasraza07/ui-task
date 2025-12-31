"use client"
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import PopularCategory from "./components/PopularCategory";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url(/images/bg/banner.jpg)] bg-cover">
        <Header />
        <HeroSection />
        <div className="bg-[#FFF9F1]">
          <div className="container max-w-5xl mx-auto py-12 overflow-hidden">
            <Swiper slidesPerView={5} loop={true} className="scrollable flex items-center gap-20">
              <SwiperSlide>
                <img src="/images/sponser/01.png" alt="google" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/sponser/02.png" alt="nestle" /></SwiperSlide>
              <SwiperSlide>
                <img src="/images/sponser/03.png" alt="disney" /></SwiperSlide>
              <SwiperSlide>
                <img src="/images/sponser/04.png" alt="airbnb" /></SwiperSlide>
              <SwiperSlide>
                <img src="/images/sponser/05.png" alt="grab" /></SwiperSlide>
              <SwiperSlide>
                <img src="/images/sponser/06.png" alt="netflix" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <PopularCategory />

    </div >

  )
}