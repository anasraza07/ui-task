import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Container from "./Container";

const sponsors = [{
  img: "01",
  name: "Google"
}, {
  img: "02",
  name: "Nestle"
}, {
  img: "03",
  name: "Disney"
}, {
  img: "04",
  name: "Airbnb"
}, {
  img: "05",
  name: "Grab"
}, {
  img: "06",
  name: "Netflix"
},]

const SponserSlider = () => {
  return (
    <div className="bg-[#FFF9F1]">
      <Container className="py-12">
        <Swiper slidesPerView={5} loop={true} spaceBetween={100}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }} 
          modules={[Autoplay]} className="">
          {sponsors.map(({ img, name }, index) => (
            <SwiperSlide className="" key={index}>
              <img src={`/images/sponser/${img}.png`}
                alt={name} className=""/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  )
}

export default SponserSlider